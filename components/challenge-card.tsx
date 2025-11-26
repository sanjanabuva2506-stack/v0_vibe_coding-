"use client"

import type { Challenge } from "@/lib/types"
import { Button } from "@/components/ui/button"

interface ChallengeCardProps {
  challenge: Challenge
  onStart: () => void
}

export default function ChallengeCard({ challenge, onStart }: ChallengeCardProps) {
  const difficultyColors = {
    Easy: "bg-accent/20 text-accent",
    Medium: "bg-secondary/20 text-secondary",
    Hard: "bg-primary/20 text-primary",
  }

  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
      <div className="text-6xl mb-4">{challenge.image}</div>
      <h3 className="text-xl font-bold mb-2 text-card-foreground">{challenge.title}</h3>
      <p className="text-card-foreground/70 mb-4 text-sm">{challenge.prompt}</p>

      <div className="flex items-center justify-between mb-4">
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${difficultyColors[challenge.difficulty as keyof typeof difficultyColors]}`}
        >
          {challenge.difficulty}
        </span>
        <span className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full">{challenge.category}</span>
      </div>

      <Button onClick={onStart} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
        Start Challenge
      </Button>
    </div>
  )
}
