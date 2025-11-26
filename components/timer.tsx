"use client"

interface TimerProps {
  timeLeft: number
}

export default function Timer({ timeLeft }: TimerProps) {
  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60
  const isWarning = timeLeft < 60
  const isCritical = timeLeft < 10

  return (
    <div className="text-center mb-8">
      <div
        className={`inline-block p-8 rounded-2xl font-mono text-6xl font-bold ${
          isCritical
            ? "bg-destructive text-destructive-foreground animate-pulse"
            : isWarning
              ? "bg-accent text-accent-foreground"
              : "bg-primary text-primary-foreground"
        }`}
      >
        {minutes}:{String(seconds).padStart(2, "0")}
      </div>
    </div>
  )
}
