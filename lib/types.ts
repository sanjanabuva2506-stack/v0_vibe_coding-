export interface Challenge {
  id: string
  title: string
  category: "Art" | "Music" | "Writing"
  prompt: string
  difficulty: "Easy" | "Medium" | "Hard"
  image: string
}

export interface UserProfile {
  id: string
  username: string
  currentStreak: number
  longestStreak: number
  totalChallenges: number
  level: number
  avatar: string
}
