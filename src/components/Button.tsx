"use client";

import type { ReactNode, ButtonHTMLAttributes } from "react";
import { forwardRef } from "react";

import { motion } from "motion/react";
import { Loader2 } from "lucide-react";
import { styled } from "@mui/material/styles";

import { colors, borderRadius, transitions, shadows } from "@/theme/theme";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  fullWidth?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const getVariantStyles = (variant: string) => {
  const variants = {
    primary: {
      backgroundColor: colors.midnightBlue,
      color: colors.white,
      boxShadow: shadows.lg,
      "&:hover": {
        backgroundColor: colors.deepNavy,
        boxShadow: shadows.xl,
      },
      "&:active": {
        boxShadow: shadows.md,
      },
    },
    secondary: {
      backgroundColor: colors.buttercream,
      color: colors.midnightBlue,
      boxShadow: shadows.lg,
      "&:hover": {
        backgroundColor: `${colors.buttercream}e6`,
        boxShadow: shadows.xl,
      },
      "&:active": {
        boxShadow: shadows.md,
      },
    },
    outline: {
      border: `2px solid ${colors.midnightBlue}`,
      color: colors.midnightBlue,
      backgroundColor: "transparent",
      "&:hover": {
        backgroundColor: colors.midnightBlue,
        color: colors.white,
      },
      "&:active": {
        borderColor: colors.deepNavy,
      },
    },
    ghost: {
      color: colors.midnightBlue,
      backgroundColor: "transparent",
      "&:hover": {
        backgroundColor: `${colors.ivory}80`,
      },
      "&:active": {
        backgroundColor: colors.ivory,
      },
    },
    danger: {
      backgroundColor: "#dc2626",
      color: colors.white,
      boxShadow: shadows.lg,
      "&:hover": {
        backgroundColor: "#b91c1c",
        boxShadow: shadows.xl,
      },
      "&:active": {
        backgroundColor: "#991b1b",
        boxShadow: shadows.md,
      },
    },
  };

  return variants[variant as keyof typeof variants];
};

const getSizeStyles = (size: string) => {
  const sizes = {
    sm: {
      padding: "10px 20px",
      fontSize: "14px",
      minHeight: "44px",
    },
    md: {
      padding: "12px 24px",
      fontSize: "16px",
      minHeight: "48px",
    },
    lg: {
      padding: "16px 32px",
      fontSize: "18px",
      minHeight: "56px",
    },
  };

  return sizes[size as keyof typeof sizes];
};

const StyledButton = styled(motion.button, {
  shouldForwardProp: (prop) =>
    !["variant", "size", "fullWidth", "loading"].includes(prop as string),
})<{
  variant: string;
  size: string;
  fullWidth?: boolean;
  loading?: boolean;
}>(({ variant, size, fullWidth }) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  borderRadius: borderRadius.xl,
  border: "none",
  cursor: "pointer",
  fontWeight: 500,
  fontFamily: "inherit",
  transition: `all ${transitions.base}`,
  width: fullWidth ? "100%" : "auto",
  ...getVariantStyles(variant),
  ...getSizeStyles(size),

  "&:focus-visible": {
    outline: `2px solid ${colors.buttercream}`,
    outlineOffset: "2px",
  },

  "&:disabled": {
    opacity: 0.5,
    cursor: "not-allowed",
    pointerEvents: "none",
  },

  "&:active:not(:disabled)": {
    transform: "scale(0.98)",
  },
}));

const LoadingIcon = styled(motion.div)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

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
      className,
      type = "button",
      onClick,
    },
    ref,
  ) => {
    const iconSize = size === "sm" ? 16 : size === "lg" ? 24 : 20;

    return (
      <StyledButton
        ref={ref}
        variant={variant}
        size={size}
        fullWidth={fullWidth}
        loading={loading}
        whileHover={!disabled && !loading ? { y: -2 } : {}}
        whileTap={!disabled && !loading ? { scale: 0.98 } : {}}
        disabled={disabled || loading}
        type={type}
        onClick={onClick}
        className={className}
      >
        {loading && (
          <LoadingIcon
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          >
            <Loader2 size={iconSize} />
          </LoadingIcon>
        )}
        {!loading && leftIcon && <span>{leftIcon}</span>}
        <span>{children}</span>
        {!loading && rightIcon && <span>{rightIcon}</span>}
      </StyledButton>
    );
  },
);

Button.displayName = "Button";
