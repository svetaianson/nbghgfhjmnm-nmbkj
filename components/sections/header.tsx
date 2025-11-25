"use client"

import { AuthDialog } from "@/components/auth-dialog"
import { UserAvatar } from "@/components/ui/user-avatar"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"
import { LogOut } from "lucide-react"
import { useRouter, usePathname } from "next/navigation"

export function Header() {
  const router = useRouter()
  const pathname = usePathname()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userEmail, setUserEmail] = useState("")
  const [authDialogOpen, setAuthDialogOpen] = useState(false)

  useEffect(() => {
    const checkAuthStatus = () => {
      const token = typeof window !== "undefined" ? localStorage.getItem("AUTH_TOKEN") : null
      const email = typeof window !== "undefined" ? localStorage.getItem("USER_EMAIL") : null

      if (token && email) {
        setIsLoggedIn(true)
        setUserEmail(email)
        window.__AUTH_TOKEN__ = token
        window.__USER_EMAIL__ = email
      } else {
        setIsLoggedIn(false)
        setUserEmail("")
      }
    }

    checkAuthStatus()

    // Listen for storage changes (e.g., from other tabs)
    window.addEventListener("storage", checkAuthStatus)
    return () => window.removeEventListener("storage", checkAuthStatus)
  }, [])

  const handleLogout = () => {
    console.log('Header handleLogout called');
    
    if (typeof window !== "undefined") {
      // Удаляем все ключи из localStorage
      const keysToRemove = ['AUTH_TOKEN', 'USER_EMAIL', 'auth_data', 'user_email', 'user_data'];
      keysToRemove.forEach(key => {
        localStorage.removeItem(key);
      });
      
      // Удаляем глобальные переменные
      delete window.__AUTH_TOKEN__;
      delete window.__USER_EMAIL__;
      
      console.log('After cleanup:', {
        AUTH_TOKEN: localStorage.getItem('AUTH_TOKEN'),
        USER_EMAIL: localStorage.getItem('USER_EMAIL'),
        auth_data: localStorage.getItem('auth_data'),
        user_email: localStorage.getItem('user_email')
      });
    }
    setIsLoggedIn(false);
    setUserEmail("");
    router.push('/');
  }

  const handleAuthSuccess = () => {
    const email = typeof window !== "undefined" ? localStorage.getItem("__USER_EMAIL__") : null
    if (email) {
      setUserEmail(email)
      setIsLoggedIn(true)
    }
  }

  const handleLogoClick = (e: React.MouseEvent) => {
    // Если мы на главной странице, открываем диалог авторизации
    if (pathname === '/') {
      e.preventDefault()
      setAuthDialogOpen(true)
    }
    // Иначе Link переведет на главную страницу
  }

  return (
    <header className="relative z-10 px-4 py-4 sm:px-6 sm:py-5 lg:px-16 lg:py-6">
      <div className="mx-auto max-w-7xl flex items-center justify-between">
        <Link href="/offer" onClick={handleLogoClick} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <img src="/logo.svg" alt="ForMatrix Logo" className="h-8 w-auto sm:h-10 lg:h-12" />
          <span className="font-logo text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
            For
            <span className="bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] bg-clip-text text-transparent">Matrix</span>
          </span>
        </Link>

        <div className="flex items-center gap-3 sm:gap-4">
          {isLoggedIn ? (
            <>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                <UserAvatar email={userEmail} size="sm" />
                <span className="hidden sm:inline text-sm text-white/80 truncate max-w-[150px]">{userEmail}</span>
              </div>
              <button
                onClick={handleLogout}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/20"
                title="Logout"
              >
                <LogOut className="h-5 w-5" />
              </button>
            </>
          ) : (
            <>
              {/* Скрытый AuthDialog для логотипа на главной странице */}
              <AuthDialog
                open={authDialogOpen}
                onOpenChange={setAuthDialogOpen}
                defaultMode="signup"
                onAuthSuccess={handleAuthSuccess}
              />
              
              <AuthDialog
                defaultMode="login"
                onAuthSuccess={handleAuthSuccess}
                trigger={
                  <Button
                    variant="ghost"
                    className="text-sm sm:text-base text-white hover:bg-white/10 hover:text-white bg-white/10 backdrop-blur-md border border-white/20 px-4 py-3 sm:px-6 sm:py-4 lg:px-8 lg:py-5 rounded-full"
                  >
                    Login
                  </Button>
                }
              />
              <AuthDialog
                defaultMode="signup"
                onAuthSuccess={handleAuthSuccess}
                trigger={
                  <Button className="bg-gradient-to-r from-[#6B21A8] via-[#7C3AED] to-[#8B5CF6] text-sm sm:text-base text-white hover:from-[#581C87] hover:via-[#6D28D9] hover:to-[#7C3AED] px-4 py-3 sm:px-6 sm:py-4 lg:px-8 lg:py-5 rounded-full shadow-[0_0_30px_rgba(139,92,246,0.5)]">
                    Sign Up
                  </Button>
                }
              />
            </>
          )}
        </div>
      </div>
    </header>
  )
}
