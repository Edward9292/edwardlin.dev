import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface NeonBorderProps {
  children: ReactNode;
  className?: string;
  color?: "cyan" | "magenta";
  hover?: boolean;
}

export function NeonBorder({
  children,
  className,
  color = "cyan",
  hover = true,
}: NeonBorderProps) {
  return (
    <div
      className={cn(
        "relative rounded-lg border bg-surface",
        color === "cyan"
          ? "border-cyan/20"
          : "border-magenta/20",
        hover && color === "cyan"
          ? "transition-shadow duration-300 hover:shadow-neon-cyan"
          : hover && color === "magenta"
          ? "transition-shadow duration-300 hover:shadow-neon-magenta"
          : "",
        className
      )}
    >
      {children}
    </div>
  );
}
