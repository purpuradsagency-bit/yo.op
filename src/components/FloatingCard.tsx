import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FloatingCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const FloatingCard = ({ children, className, delay = 0 }: FloatingCardProps) => {
  return (
    <div
      className={cn(
        "group relative transform transition-all duration-500 hover:scale-105 hover:-translate-y-3",
        "bg-card/80 backdrop-blur-xl border border-primary/10 rounded-2xl shadow-lavender-sm hover:shadow-lavender-lg",
        "animate-fade-up",
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300" />
      {children}
    </div>
  );
};