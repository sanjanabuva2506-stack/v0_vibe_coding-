"use client"

import type { Challenge, UserProfile } from "@/lib/types"
import ChallengeCard from "./challenge-card"
import StreakDisplay from "./streak-display"
import Navigation from "./navigation"

interface HomePageProps {
  challenges: Challenge[]
  onStartChallenge: (challenge: Challenge) => void
  userProfile: UserProfile
  onNavigate: (view: string) => void
}

export default function HomePage({ challenges, onStartChallenge, userProfile, onNavigate }: HomePageProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-6 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">VibeCoding</h1>
          <p className="text-primary-foreground/90">5-minute creative challenges to fuel your imagination</p>
        </div>
      </header>

      <StreakDisplay profile={userProfile} />

      <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {challenges.map((challenge) => (
            <ChallengeCard key={challenge.id} challenge={challenge} onStart={() => onStartChallenge(challenge)} />
          ))}
        </div>
      </main>

      <Navigation onNavigate={onNavigate} currentView="home" />
    </div>
  )
}
