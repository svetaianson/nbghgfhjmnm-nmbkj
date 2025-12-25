"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { isUserAuthenticated } from "@/lib/auth-utils"
import { toast } from "sonner"

/**
 * Hook to protect routes by checking authentication status.
 * Redirects to home page if user is not authenticated.
 *
 * @param redirectMessage - Optional custom message to show on redirect
 * @returns void
 *
 * @example
 * export default function ProtectedPage() {
 *   useProtectedRoute("Please login to access this page")
 *   return <div>Protected content</div>
 * }
 */
export function useProtectedRoute(redirectMessage: string = "Please login to continue") {
  const router = useRouter()
  const [isChecking, setIsChecking] = useState(true)

  useEffect(() => {
    // Add a small delay to allow localStorage to be fully updated after redirect
    // This prevents race conditions where the auth state hasn't been updated yet
    const delayedCheck = setTimeout(() => {
      const checkAuth = () => {
        // Check if user is authenticated
        if (!isUserAuthenticated()) {
          // Show toast message
          toast.warning(redirectMessage, {
            duration: 3000,
          })

          // Redirect to home page
          router.push("/")
        }
        setIsChecking(false)
      }

      // Run auth check
      checkAuth()
    }, 100) // 100ms delay to ensure localStorage is updated

    // Also listen for storage changes (logout from another tab)
    const handleStorageChange = () => {
      if (!isUserAuthenticated()) {
        toast.warning(redirectMessage, {
          duration: 3000,
        })
        router.push("/")
      }
    }

    window.addEventListener("storage", handleStorageChange)

    return () => {
      clearTimeout(delayedCheck)
      window.removeEventListener("storage", handleStorageChange)
    }
  }, [router, redirectMessage])
}
