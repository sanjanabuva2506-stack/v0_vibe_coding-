"use client"

import type React from "react"

import { useState } from "react"
import type { Challenge } from "@/lib/types"
import { Button } from "@/components/ui/button"

interface SubmissionFormProps {
  challenge: Challenge
  onSubmit: () => void
}

export default function SubmissionForm({ challenge, onSubmit }: SubmissionFormProps) {
  const [content, setContent] = useState("")
  const [imageUrl, setImageUrl] = useState("")

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setImageUrl(event.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-card border border-border rounded-lg p-8">
        <h2 className="text-2xl font-bold text-card-foreground mb-4">Fantastic! 🎉</h2>
        <p className="text-card-foreground/70 mb-6">Tell us about your creation or share it with the community.</p>

        {challenge.category === "Writing" && (
          <div className="mb-6">
            <label className="block text-sm font-semibold text-card-foreground mb-2">
              Your Writing ({content.length} characters)
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Share your writing here..."
              className="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              rows={6}
            />
          </div>
        )}

        {(challenge.category === "Art" || challenge.category === "Music") && (
          <div className="mb-6">
            <label className="block text-sm font-semibold text-card-foreground mb-2">
              Upload or Describe Your Work
            </label>
            <div className="border-2 border-dashed border-border rounded-lg p-6 text-center mb-4">
              {imageUrl ? (
                <img src={imageUrl || "/placeholder.svg"} alt="Preview" className="max-h-48 mx-auto rounded-lg mb-4" />
              ) : (
                <div className="text-4xl mb-3">📁</div>
              )}
              <input
                type="file"
                onChange={handleFileUpload}
                accept="image/*,audio/*"
                className="hidden"
                id="file-upload"
              />
              <label htmlFor="file-upload" className="cursor-pointer">
                <div className="text-sm font-semibold text-primary hover:text-primary/80">
                  Click to upload or drag and drop
                </div>
              </label>
            </div>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Describe your creation or feelings during the challenge..."
              className="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              rows={4}
            />
          </div>
        )}

        <Button
          type="submit"
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-lg"
          size="lg"
        >
          Complete Challenge & Continue
        </Button>
      </div>
    </form>
  )
}
