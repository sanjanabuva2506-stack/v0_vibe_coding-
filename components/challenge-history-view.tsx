"use client"

import type { Challenge } from "@/lib/types"
import { Button } from "@/components/ui/button"

interface ChallengeHistoryViewProps {
  completedChallenges: Array<{ challenge: Challenge; timestamp: number }>
  onBack: () => void
}

export default function ChallengeHistoryView({ completedChallenges, onBack }: ChallengeHistoryViewProps) {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-6 px-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Challenge History</h1>
            <p className="text-primary-foreground/90">{completedChallenges.length} challenges completed</p>
          </div>
          <Button
            onClick={onBack}
            variant="outline"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            ← Back
          </Button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {completedChallenges.length === 0 ? (
          <div className="bg-card border border-border rounded-lg p-12 text-center">
            <div className="text-6xl mb-4">📝</div>
            <h2 className="text-2xl font-bold text-card-foreground mb-2">No Challenges Yet</h2>
            <p className="text-card-foreground/70">Complete your first challenge to see it here!</p>
          </div>
        ) : (
          <div className="space-y-3">
            {completedChallenges
              .slice()
              .reverse()
              .map((item, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-4 flex items-center gap-4">
                  <div className="text-4xl">{item.challenge.image}</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-card-foreground">{item.challenge.title}</h3>
                    <p className="text-sm text-card-foreground/70">{new Date(item.timestamp).toLocaleDateString()}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-secondary">{item.challenge.category}</div>
                    <p className="text-xs text-card-foreground/70">{item.challenge.difficulty}</p>
                  </div>
                </div>
              ))}
          </div>
        )}
      </main>
    </div>
  )
}
