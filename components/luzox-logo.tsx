export function LusoxezLogo({
  className = "",
  size = "default",
}: { className?: string; size?: "small" | "default" | "large" }) {
  const sizes = {
    small: "h-8",
    default: "h-12",
    large: "h-16",
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo Icon - Factory/Connection Symbol */}
      <div
        className={`${sizes[size]} aspect-square bg-primary rounded-lg flex items-center justify-center relative overflow-hidden`}
      >
        {/* Tile pattern background */}
        <div className="absolute inset-0 tile-pattern-dense opacity-30" />
        {/* Factory/Network Icon */}
        <svg viewBox="0 0 24 24" fill="none" className="w-2/3 h-2/3 relative z-10" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3 21V9L8 6L13 9V6L18 3V21H3Z"
            fill="currentColor"
            className="text-primary-foreground"
            opacity="0.9"
          />
          <path
            d="M5 13H7V15H5V13Z M9 13H11V15H9V13Z M13 13H15V15H13V13Z"
            fill="currentColor"
            className="text-accent"
          />
          <path
            d="M5 17H7V19H5V17Z M9 17H11V19H9V17Z M13 17H15V19H13V17Z"
            fill="currentColor"
            className="text-accent"
          />
        </svg>
      </div>

      {/* Brand Name */}
      <div className="flex flex-col">
        <span
          className={`font-extrabold tracking-widest leading-none uppercase ${
            size === "small" ? "text-2xl" : size === "large" ? "text-4xl" : "text-3xl"
          }`}
          style={{
            color: "oklch(0.75 0.12 85)",
            letterSpacing: "0.15em",
            fontWeight: 800,
          }}
        >
          LUZOX
        </span>
        <span className={`text-muted-foreground ${size === "small" ? "text-xs" : "text-sm"} tracking-wide`}>
          Factory Direct
        </span>
      </div>
    </div>
  )
}
