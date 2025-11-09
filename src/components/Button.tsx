"use client";

import type { ReactNode, ButtonHTMLAttributes } from "react";
import { forwardRef } from "react";

import { motion } from "motion/react";
import { Loader2 } from "lucide-react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  fullWidth?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      loading = false,
      fullWidth = false,
      leftIcon,
      rightIcon,
      disabled,
      className = "",
      ...props
    },
    ref,
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center gap-2 rounded-xl transition-all duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none font-medium active:scale-[0.98] touch-target";

    const variants = {
      primary:
        "bg-[var(--midnight-blue)] text-white hover:bg-[var(--deep-navy)] focus-visible:ring-[var(--midnight-blue)] shadow-lg hover:shadow-xl active:shadow-md",
      secondary:
        "bg-[var(--buttercream)] text-[var(--midnight-blue)] hover:bg-[var(--buttercream)]/90 focus-visible:ring-[var(--buttercream)] shadow-lg hover:shadow-xl active:shadow-md",
      outline:
        "border-2 border-[var(--midnight-blue)] text-[var(--midnight-blue)] hover:bg-[var(--midnight-blue)] hover:text-white focus-visible:ring-[var(--midnight-blue)] active:border-[var(--deep-navy)]",
      ghost:
        "text-[var(--midnight-blue)] hover:bg-[var(--ivory)]/50 active:bg-[var(--ivory)] focus-visible:ring-[var(--midnight-blue)]",
      danger:
        "bg-red-600 text-white hover:bg-red-700 active:bg-red-800 focus-visible:ring-red-600 shadow-lg hover:shadow-xl active:shadow-md",
    };

    const sizes = {
      sm: "px-5 py-2.5 text-sm min-h-[44px]",
      md: "px-6 py-3 text-base min-h-[48px]",
      lg: "px-8 py-4 text-lg min-h-[56px]",
    };

    const widthClass = fullWidth ? "w-full" : "";

    return (
      <motion.button
        ref={ref}
        whileHover={!disabled && !loading ? { y: -2 } : {}}
        whileTap={!disabled && !loading ? { scale: 0.98 } : {}}
        disabled={disabled || loading}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
        {...props}
      >
        {loading && (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          >
            <Loader2 size={size === "sm" ? 16 : size === "lg" ? 24 : 20} />
          </motion.div>
        )}
        {!loading && leftIcon && <span>{leftIcon}</span>}
        <span>{children}</span>
        {!loading && rightIcon && <span>{rightIcon}</span>}
      </motion.button>
    );
  },
);

Button.displayName = "Button";
