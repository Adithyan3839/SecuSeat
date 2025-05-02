"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { createClient } from "@/lib/supabase/client"

type TeamMember = {
  id: string
  name: string
  position: string
  bio: string | null
  image_url: string | null
}

type CompanyInfo = {
  id: string
  email: string
  phone: string
  linkedin_url: string
  instagram_url: string
  twitter_url: string
  office_hours: string
}

export default function AdminPage() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([])
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo | null>(null)
  const [loading, setLoading] = useState(true)
  const [message, setMessage] = useState("")

  useEffect(() => {
    async function fetchData() {
      try {
        const supabase = createClient()

        // Fetch team members
        const { data: teamData, error: teamError } = await supabase
          .from("team_members")
          .select("*")
          .order("created_at", { ascending: true })

        if (teamError) throw teamError

        // Fetch company info
        const { data: companyData, error: companyError } = await supabase
          .from("company_info")
          .select("*")
          .limit(1)
          .single()

        if (companyError && companyError.code !== "PGRST116") throw companyError

        setTeamMembers(teamData || [])
        setCompanyInfo(companyData || null)
      } catch (error) {
        console.error("Error fetching data:", error)
        setMessage("Failed to load data. Please try again.")
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const updateCompanyInfo = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!companyInfo) return

    try {
      setLoading(true)
      const supabase = createClient()

      const { error } = await supabase.from("company_info").upsert({
        id: companyInfo.id,
        email: companyInfo.email,
        phone: companyInfo.phone,
        linkedin_url: companyInfo.linkedin_url,
        instagram_url: companyInfo.instagram_url,
        twitter_url: companyInfo.twitter_url,
        office_hours: companyInfo.office_hours,
      })

      if (error) throw error

      setMessage("Company information updated successfully!")
    } catch (error) {
      console.error("Error updating company info:", error)
      setMessage("Failed to update company information. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleCompanyInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    if (companyInfo) {
      setCompanyInfo({
        ...companyInfo,
        [name]: value,
      })
    }
  }

  if (loading) {
    return (
      <div className="container py-12">
        <Card>
          <CardContent className="pt-6">
            <p className="text-center">Loading...</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      {message && (
        <div className="bg-primary/10 p-4 rounded-md mb-6">
          <p>{message}</p>
        </div>
      )}

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Company Information</CardTitle>
          <CardDescription>Update your contact details and social media links</CardDescription>
        </CardHeader>
        <CardContent>
          {companyInfo ? (
            <form onSubmit={updateCompanyInfo} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" value={companyInfo.email} onChange={handleCompanyInfoChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" name="phone" value={companyInfo.phone} onChange={handleCompanyInfoChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="linkedin_url">LinkedIn URL</Label>
                  <Input
                    id="linkedin_url"
                    name="linkedin_url"
                    value={companyInfo.linkedin_url}
                    onChange={handleCompanyInfoChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="instagram_url">Instagram URL</Label>
                  <Input
                    id="instagram_url"
                    name="instagram_url"
                    value={companyInfo.instagram_url}
                    onChange={handleCompanyInfoChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="twitter_url">Twitter URL</Label>
                  <Input
                    id="twitter_url"
                    name="twitter_url"
                    value={companyInfo.twitter_url}
                    onChange={handleCompanyInfoChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="office_hours">Office Hours</Label>
                  <Textarea
                    id="office_hours"
                    name="office_hours"
                    value={companyInfo.office_hours}
                    onChange={handleCompanyInfoChange}
                  />
                </div>
              </div>
              <Button type="submit" disabled={loading}>
                {loading ? "Updating..." : "Update Company Info"}
              </Button>
            </form>
          ) : (
            <p>No company information found. Please create a record in the database.</p>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Contact Form Submissions</CardTitle>
          <CardDescription>View messages from your contact form</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This feature will be implemented in a future update.</p>
        </CardContent>
      </Card>
    </div>
  )
}
