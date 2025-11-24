"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

export function FadeLink({ href, children, className = "", ...props }: any) {
  const [fading, setFading] = useState(false)
  const router = useRouter()

  const handleClick = (e: any) => {
    if (href.startsWith("http")) return // let browser handle external
    e.preventDefault()
    setFading(true)
    setTimeout(() => {
      router.push(href)
    }, 250)
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className={
        `${className} transition-opacity duration-300 ${fading ? "opacity-0" : "opacity-100"}`
      }
      {...props}
    >
      {children}
    </a>
  )
}
