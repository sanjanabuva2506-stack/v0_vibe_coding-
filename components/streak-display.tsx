"use client"

import type { UserProfile } from "@/lib/types"

interface StreakDisplayProps {
  profile: UserProfile
}

export default function StreakDisplay({ profile }: StreakDisplayProps) {
  return (
    <div className="bg-card border-b border-border">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">{profile.currentStreak}</div>
            <div className="text-sm text-card-foreground/70">Current Streak 🔥</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary">{profile.longestStreak}</div>
            <div className="text-sm text-card-foreground/70">Longest Streak</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent">{profile.totalChallenges}</div>
            <div className="text-sm text-card-foreground/70">Total Challenges</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">Level {profile.level}</div>
            <div className="text-sm text-card-foreground/70">Current Level</div>
          </div>
        </div>
      </div>
    </div>
  )
}
