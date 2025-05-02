"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { createClient } from "@/lib/supabase/client"

interface ImageUploadProps {
  onUploadComplete: (url: string) => void
  currentImageUrl?: string
}

export function ImageUpload({ onUploadComplete, currentImageUrl }: ImageUploadProps) {
  const [uploading, setUploading] = useState(false)
  const [preview, setPreview] = useState<string | null>(currentImageUrl || null)
  const [error, setError] = useState<string | null>(null)

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setError(null)
      const files = e.target.files

      if (!files || files.length === 0) {
        return
      }

      const file = files[0]

      // Check file type
      if (!file.type.startsWith("image/")) {
        setError("Please upload an image file")
        return
      }

      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setError("Image size should be less than 5MB")
        return
      }

      setUploading(true)

      // Create a preview
      const reader = new FileReader()
      reader.onload = (e) => {
        if (e.target?.result) {
          setPreview(e.target.result as string)
        }
      }
      reader.readAsDataURL(file)

      // Upload to Supabase Storage
      const supabase = createClient()
      const fileExt = file.name.split(".").pop()
      const fileName = `${Math.random().toString(36).substring(2, 15)}.${fileExt}`
      const filePath = `team/${fileName}`

      const { error: uploadError, data } = await supabase.storage.from("images").upload(filePath, file)

      if (uploadError) {
        throw uploadError
      }

      // Get the public URL
      const { data: publicUrlData } = supabase.storage.from("images").getPublicUrl(filePath)

      if (publicUrlData && publicUrlData.publicUrl) {
        onUploadComplete(publicUrlData.publicUrl)
      }
    } catch (error) {
      console.error("Error uploading image:", error)
      setError("Failed to upload image. Please try again.")
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="space-y-4">
      {preview && (
        <div className="relative w-32 h-32 mx-auto">
          <img src={preview || "/placeholder.svg"} alt="Preview" className="w-full h-full object-cover rounded-full" />
        </div>
      )}

      <div className="flex flex-col items-center">
        <Button
          variant="outline"
          onClick={() => document.getElementById("image-upload")?.click()}
          disabled={uploading}
          className="w-full"
        >
          {uploading ? "Uploading..." : "Upload Image"}
        </Button>
        <input id="image-upload" type="file" accept="image/*" onChange={handleUpload} className="hidden" />
        {error && <p className="text-destructive text-sm mt-2">{error}</p>}
      </div>
    </div>
  )
}
