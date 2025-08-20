"use client"

import type React from "react"
import Button from "../Button"

interface EmptyCaseProps {
  icon?: React.ReactNode
  title?: string
  description?: string
  actionLabel?: string
  onAction?: () => void
  className?: string
}

const Empty=({
  icon,
  title = "No results found",
  description = "Try adjusting your search or filters to find what you're looking for.",
  actionLabel,
  onAction,
  className = "",
}: EmptyCaseProps)=> {
  return (
    <div
      className={`flex flex-col items-center justify-center p-12 text-center bg-white border border-gray-200 rounded-lg ${className}`}
      style={{
        backgroundColor: "var(--color-background)",
        borderColor: "var(--color-gray-200)",
        boxShadow: "var(--shadow-sm)",
      }}
    >
      {icon && (
        <div className="mb-4" style={{ color: "var(--color-gray-400)" }}>
          {icon}
        </div>
      )}

      <h3
        className="mb-2"
        style={{
          fontSize: "var(--text-lg)",
          lineHeight: "var(--text-lg--line-height)",
          fontWeight: "var(--text-lg-semibold--font-weight)",
          color: "var(--color-foreground)",
        }}
      >
        {title}
      </h3>

      <p
        className="mb-6 max-w-md"
        style={{
          fontSize: "var(--text-md)",
          lineHeight: "var(--text-md--line-height)",
          color: "var(--color-gray-500)",
        }}
      >
        {description}
      </p>

      {actionLabel && onAction && (
        <Button
          onClick={onAction}
          color='secondary'
        >
          {actionLabel}
        </Button>
      )}
    </div>
  )
}

export default Empty