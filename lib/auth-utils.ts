export function isUserAuthenticated(): boolean {
  // Check if dev mode is enabled
  const isDevMode = process.env.NEXT_PUBLIC_IS_USER_ALWAYS_IN === "true"

  if (isDevMode) {
    return true
  }

  // Normal authentication check
  if (typeof window === "undefined") return false

  const token = localStorage.getItem("AUTH_TOKEN")
  const email = localStorage.getItem("USER_EMAIL")

  return !!(token && email)
}

export function getUserEmail(): string {
  // Check if dev mode is enabled
  const isDevMode = process.env.NEXT_PUBLIC_IS_USER_ALWAYS_IN === "true"

  if (isDevMode) {
    return "dev@example.com"
  }

  // Normal email retrieval
  if (typeof window === "undefined") return ""

  return localStorage.getItem("USER_EMAIL") || ""
}

export const AUTH_CHANGE_EVENT = "authchange"

export function notifyAuthChange(): void {
  if (typeof window === "undefined") return
  window.dispatchEvent(new Event(AUTH_CHANGE_EVENT))
}
