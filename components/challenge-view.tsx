"use client"

import { useState, useEffect } from "react"
import type { Challenge } from "@/lib/types"
import { Button } from "@/components/ui/button"
import Timer from "./timer"
import SubmissionForm from "./submission-form"

interface ChallengeViewProps {
  challenge: Challenge
  onComplete: () => void
  onBack: () => void
}

export default function ChallengeView({ challenge, onComplete, onBack }: ChallengeViewProps) {
  const [timeLeft, setTimeLeft] = useState(300) // 5 minutes in seconds
  const [isRunning, setIsRunning] = useState(true)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (!isRunning || submitted) return

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsRunning(false)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [isRunning, submitted])

  const handleToggleTimer = () => {
    setIsRunning(!isRunning)
  }

  const handleSubmit = () => {
    setSubmitted(true)
    setIsRunning(false)
  }

  const handleComplete = () => {
    onComplete()
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-6 px-4">
        <div className="max-w-4xl mx-auto flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold mb-2">{challenge.title}</h1>
            <p className="text-primary-foreground/90">{challenge.prompt}</p>
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

      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="max-w-2xl w-full">
          {!submitted ? (
            <>
              <Timer timeLeft={timeLeft} />

              <div className="mt-8 bg-card border border-border rounded-lg p-8 text-center mb-6">
                <div className="text-8xl mb-4">{challenge.image}</div>
                <h2 className="text-2xl font-bold text-card-foreground mb-4">Create Your {challenge.category}</h2>
                <p className="text-card-foreground/70 mb-6">
                  You have {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, "0")} left
                </p>

                <div className="space-y-3">
                  <Button
                    onClick={handleToggleTimer}
                    className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold py-6 text-lg"
                    size="lg"
                  >
                    {isRunning ? "⏸ Pause" : "▶ Resume"}
                  </Button>
                  <Button
                    onClick={handleSubmit}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-lg"
                    size="lg"
                  >
                    ✓ Submit Challenge
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <SubmissionForm challenge={challenge} onSubmit={handleComplete} />
          )}
        </div>
      </div>
    </div>
  )
}
