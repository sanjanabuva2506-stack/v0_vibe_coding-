"use client"

import type { UserProfile } from "@/lib/types"
import { Button } from "@/components/ui/button"

interface ProfileViewProps {
  profile: UserProfile
  onBack: () => void
}

export default function ProfileView({ profile, onBack }: ProfileViewProps) {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-gradient-to-r from-accent to-primary text-accent-foreground py-6 px-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Your Profile</h1>
            <p className="text-accent-foreground/90">Track your creative journey</p>
          </div>
          <Button
            onClick={onBack}
            variant="outline"
            className="bg-accent-foreground text-accent hover:bg-accent-foreground/90"
          >
            ← Back
          </Button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-card border border-border rounded-lg p-8 mb-8">
          <div className="flex items-center gap-6 mb-8">
            <div className="text-8xl">{profile.avatar}</div>
            <div>
              <h2 className="text-3xl font-bold text-card-foreground">{profile.username}</h2>
              <p className="text-lg text-card-foreground/70">Level {profile.level} Creator</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-background p-4 rounded-lg text-center border border-border">
              <div className="text-3xl font-bold text-primary">{profile.currentStreak}</div>
              <p className="text-sm text-card-foreground/70 mt-1">Current Streak 🔥</p>
            </div>
            <div className="bg-background p-4 rounded-lg text-center border border-border">
              <div className="text-3xl font-bold text-secondary">{profile.longestStreak}</div>
              <p className="text-sm text-card-foreground/70 mt-1">Best Streak</p>
            </div>
            <div className="bg-background p-4 rounded-lg text-center border border-border">
              <div className="text-3xl font-bold text-accent">{profile.totalChallenges}</div>
              <p className="text-sm text-card-foreground/70 mt-1">Challenges Done</p>
            </div>
            <div className="bg-background p-4 rounded-lg text-center border border-border">
              <div className="text-3xl font-bold text-primary">Level {profile.level}</div>
              <p className="text-sm text-card-foreground/70 mt-1">Your Level</p>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-xl font-bold text-card-foreground mb-4">Achievements 🏆</h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl mb-2">{["🎨", "🎵", "✍️", "🔥", "⭐", "👑"][i]}</div>
                <p className="text-xs text-card-foreground/70">
                  {["Creator", "Musician", "Writer", "Streak", "Star", "Master"][i]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
