"use client"

import { Button } from "@/components/ui/button"

interface NavigationProps {
  onNavigate: (view: string) => void
  currentView: string
}

export default function Navigation({ onNavigate, currentView }: NavigationProps) {
  const navItems = [
    { id: "home", label: "🏠 Home", view: "home" },
    { id: "leaderboard", label: "🏆 Leaderboard", view: "leaderboard" },
    { id: "history", label: "📜 History", view: "history" },
    { id: "profile", label: "👤 Profile", view: "profile" },
  ]

  return (
    <nav className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex gap-2 flex-wrap">
          {navItems.map((item) => (
            <Button
              key={item.id}
              onClick={() => onNavigate(item.view)}
              className={`flex-1 md:flex-none ${
                currentView === item.view
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/90"
              }`}
            >
              {item.label}
            </Button>
          ))}
        </div>
      </div>
    </nav>
  )
}
