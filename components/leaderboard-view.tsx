"use client"

import { Button } from "@/components/ui/button"

interface LeaderboardViewProps {
  onBack: () => void
}

export default function LeaderboardView({ onBack }: LeaderboardViewProps) {
  const leaderboard = [
    { rank: 1, username: "ArtMaster99", streak: 24, totalChallenges: 156 },
    { rank: 2, username: "MusicLover", streak: 19, totalChallenges: 142 },
    { rank: 3, username: "WriterBee", streak: 17, totalChallenges: 128 },
    { rank: 4, username: "CreativeVibe", streak: 15, totalChallenges: 98 },
    { rank: 5, username: "AllArtist", streak: 12, totalChallenges: 87 },
  ]

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-gradient-to-r from-secondary to-accent text-secondary-foreground py-6 px-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Leaderboard</h1>
            <p className="text-secondary-foreground/90">Top Creators This Month</p>
          </div>
          <Button
            onClick={onBack}
            variant="outline"
            className="bg-secondary-foreground text-secondary hover:bg-secondary-foreground/90"
          >
            ← Back
          </Button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-3">
          {leaderboard.map((user) => (
            <div key={user.rank} className="bg-card border border-border rounded-lg p-4 flex items-center gap-4">
              <div className="text-3xl font-bold text-primary w-12 text-center">
                {user.rank === 1 ? "🥇" : user.rank === 2 ? "🥈" : user.rank === 3 ? "🥉" : user.rank}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-card-foreground">{user.username}</h3>
                <p className="text-sm text-card-foreground/70">{user.totalChallenges} challenges completed</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-primary">{user.streak} 🔥</div>
                <p className="text-xs text-card-foreground/70">streak</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
