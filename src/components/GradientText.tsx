import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
}

export const GradientText = ({ children, className }: GradientTextProps) => {
  return (
    <span className={cn(
      "bg-gradient-to-r from-primary via-primary-glow to-primary-dark bg-clip-text text-transparent font-bold",
      "animate-gradient-shift bg-size-200",
      className
    )}>
      {children}
    </span>
  );
};