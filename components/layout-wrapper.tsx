"use client"

import React from "react"
import { usePathname } from "next/navigation"
import { isUserAuthenticated } from "@/lib/auth-utils"
// Компонент-обертка для основного контента
// Добавляет отступ слева только когда пользователь залогинен (чтобы контент не перекрывался sidebar)
// Когда пользователь НЕ залогинен - sidebar скрыт, отступ не нужен
// На домашней странице (/) отступ не добавляется даже если пользователь залогинен

interface LayoutWrapperProps {
  children: React.ReactNode
}

export function LayoutWrapper({ children }: LayoutWrapperProps) {
  const pathname = usePathname()
  const [isLoggedIn, setIsLoggedIn] = React.useState(false)

  React.useEffect(() => {
    const checkAuthStatus = () => {
      setIsLoggedIn(isUserAuthenticated())
    }

    checkAuthStatus()

    window.addEventListener("storage", checkAuthStatus)
    return () => window.removeEventListener("storage", checkAuthStatus)
  }, [])

  const shouldAddPadding = isLoggedIn && pathname !== "/"

  return (
    <div className={shouldAddPadding ? "pl-0 md:pl-[68px] rtl:pr-0 rtl:md:pr-[68px] rtl:md:pl-0" : "pl-0 rtl:pr-0"}>
      {children}
    </div>
  )
}
