"use client"

import { Button } from "@/components/ui/button"

export default function Home() {
  const handleGetKey = () => {
    window.open("https://www.roblox.com/share?code=3fc211f0e9afdc4abc717bb77946d665&type=Server", "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4 relative">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      </div>

      {/* Main content card */}
      <div className="relative z-10 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 max-w-md w-full text-center shadow-2xl">
        <div className="space-y-6">
          {/* Main heading */}
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-white leading-tight">Welcome to Vercel Hub</h1>
            <p className="text-gray-300 text-sm">To get a key, just click the Copy Key button below.</p>
          </div>

          {/* CTA Button */}
          <Button
            onClick={handleGetKey}
            className="w-full bg-white hover:bg-gray-100 text-black font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            COPY SCRIPT (keyless)
          </Button>

          {/* Description */}
          <div className="space-y-3 pt-2">
            <p className="text-gray-400 text-sm">
              The script offers instant steal, auto steal, brain rot finder and much more.
            </p>

            {/* Stats */}
            <p className="text-green-400 font-medium text-sm">We have 50K+ active players!</p>
          </div>
        </div>
      </div>
    </div>
  )
}
