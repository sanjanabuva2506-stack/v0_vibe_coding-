"use client"

import { useState } from "react"
import HomePage from "@/components/home-page"
import ChallengeView from "@/components/challenge-view"
import LeaderboardView from "@/components/leaderboard-view"
import ProfileView from "@/components/profile-view"
import ChallengeHistoryView from "@/components/challenge-history-view"
import type { Challenge, UserProfile } from "@/lib/types"

export default function Page() {
  const [currentView, setCurrentView] = useState<"home" | "challenge" | "leaderboard" | "profile" | "history">("home")
  const [userProfile, setUserProfile] = useState<UserProfile>({
    id: "1",
    username: "CreativeUser",
    currentStreak: 7,
    longestStreak: 12,
    totalChallenges: 42,
    level: 4,
    avatar: "🎨",
  })
  const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(null)
  const [completedChallenges, setCompletedChallenges] = useState<Array<{ challenge: Challenge; timestamp: number }>>([])

  const challenges: Challenge[] = [
    {
      id: "1",
      title: "Abstract Color Play",
      category: "Art",
      prompt: "Create an abstract artwork using only primary colors",
      difficulty: "Easy",
      image: "🎨",
    },
    {
      id: "2",
      title: "Doodle Monster",
      category: "Art",
      prompt: "Draw a cute monster character in 5 minutes",
      difficulty: "Easy",
      image: "👹",
    },
    {
      id: "3",
      title: "Melody Loop",
      category: "Music",
      prompt: "Compose a 8-bar melody that repeats",
      difficulty: "Medium",
      image: "🎵",
    },
    {
      id: "4",
      title: "Ambient Soundscape",
      category: "Music",
      prompt: "Create a 30-second ambient music piece",
      difficulty: "Hard",
      image: "🎶",
    },
    {
      id: "5",
      title: "Micro Flash Fiction",
      category: "Writing",
      prompt: "Write a 100-word story with a plot twist",
      difficulty: "Easy",
      image: "✍️",
    },
    {
      id: "6",
      title: "Poetry Slam",
      category: "Writing",
      prompt: "Write a haiku about technology",
      difficulty: "Easy",
      image: "📝",
    },
  ]

  const handleStartChallenge = (challenge: Challenge) => {
    setSelectedChallenge(challenge)
    setCurrentView("challenge")
  }

  const handleCompleteChallenge = () => {
    if (selectedChallenge) {
      setCompletedChallenges([...completedChallenges, { challenge: selectedChallenge, timestamp: Date.now() }])
      setUserProfile({
        ...userProfile,
        currentStreak: userProfile.currentStreak + 1,
        totalChallenges: userProfile.totalChallenges + 1,
        longestStreak: Math.max(userProfile.longestStreak, userProfile.currentStreak + 1),
        level: Math.floor((userProfile.totalChallenges + 1) / 10) + 1,
      })
      setCurrentView("home")
      setSelectedChallenge(null)
    }
  }

  return (
    <main className="min-h-screen bg-background">
      {currentView === "home" && (
        <HomePage
          challenges={challenges}
          onStartChallenge={handleStartChallenge}
          userProfile={userProfile}
          onNavigate={setCurrentView}
        />
      )}
      {currentView === "challenge" && selectedChallenge && (
        <ChallengeView
          challenge={selectedChallenge}
          onComplete={handleCompleteChallenge}
          onBack={() => setCurrentView("home")}
        />
      )}
      {currentView === "leaderboard" && <LeaderboardView onBack={() => setCurrentView("home")} />}
      {currentView === "profile" && <ProfileView profile={userProfile} onBack={() => setCurrentView("home")} />}
      {currentView === "history" && (
        <ChallengeHistoryView completedChallenges={completedChallenges} onBack={() => setCurrentView("home")} />
      )}
    </main>
  )
}
