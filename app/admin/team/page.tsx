"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ImageUpload } from "@/components/image-upload"
import { createClient } from "@/lib/supabase/client"
import { Trash2, Plus } from "lucide-react"

type TeamMember = {
  id: string
  name: string
  position: string
  bio: string | null
  image_url: string | null
}

export default function TeamAdminPage() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([])
  const [loading, setLoading] = useState(true)
  const [message, setMessage] = useState("")
  const [newMember, setNewMember] = useState<Omit<TeamMember, "id">>({
    name: "",
    position: "",
    bio: "",
    image_url: null,
  })

  useEffect(() => {
    fetchTeamMembers()
  }, [])

  const fetchTeamMembers = async () => {
    try {
      setLoading(true)
      const supabase = createClient()

      const { data, error } = await supabase.from("team_members").select("*").order("created_at", { ascending: true })

      if (error) throw error

      setTeamMembers(data || [])
    } catch (error) {
      console.error("Error fetching team members:", error)
      setMessage("Failed to load team members. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleNewMemberChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setNewMember((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleImageUpload = (url: string) => {
    setNewMember((prev) => ({
      ...prev,
      image_url: url,
    }))
  }

  const addTeamMember = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      setLoading(true)
      const supabase = createClient()

      const { error } = await supabase.from("team_members").insert([newMember])

      if (error) throw error

      setMessage("Team member added successfully!")
      setNewMember({
        name: "",
        position: "",
        bio: "",
        image_url: null,
      })

      // Refresh the list
      fetchTeamMembers()
    } catch (error) {
      console.error("Error adding team member:", error)
      setMessage("Failed to add team member. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const deleteTeamMember = async (id: string) => {
    if (!confirm("Are you sure you want to delete this team member?")) {
      return
    }

    try {
      setLoading(true)
      const supabase = createClient()

      const { error } = await supabase.from("team_members").delete().eq("id", id)

      if (error) throw error

      setMessage("Team member deleted successfully!")

      // Refresh the list
      fetchTeamMembers()
    } catch (error) {
      console.error("Error deleting team member:", error)
      setMessage("Failed to delete team member. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  if (loading && teamMembers.length === 0) {
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
      <h1 className="text-3xl font-bold mb-8">Team Members Management</h1>

      {message && (
        <div className="bg-primary/10 p-4 rounded-md mb-6">
          <p>{message}</p>
        </div>
      )}

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Add New Team Member</CardTitle>
          <CardDescription>Add a new member to your team</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={addTeamMember} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" value={newMember.name} onChange={handleNewMemberChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="position">Position</Label>
                <Input
                  id="position"
                  name="position"
                  value={newMember.position}
                  onChange={handleNewMemberChange}
                  required
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea id="bio" name="bio" value={newMember.bio || ""} onChange={handleNewMemberChange} rows={3} />
              </div>
              <div className="space-y-2">
                <Label>Profile Image</Label>
                <ImageUpload onUploadComplete={handleImageUpload} />
              </div>
            </div>
            <Button type="submit" disabled={loading} className="mt-4">
              <Plus className="mr-2 h-4 w-4" />
              {loading ? "Adding..." : "Add Team Member"}
            </Button>
          </form>
        </CardContent>
      </Card>

      <h2 className="text-2xl font-bold mb-4">Current Team Members</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member) => (
          <Card key={member.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription>{member.position}</CardDescription>
                </div>
                {member.image_url && (
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <img
                      src={member.image_url || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent>{member.bio && <p className="text-sm text-muted-foreground">{member.bio}</p>}</CardContent>
            <CardFooter>
              <Button variant="destructive" size="sm" onClick={() => deleteTeamMember(member.id)}>
                <Trash2 className="mr-2 h-4 w-4" />
                Delete
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
