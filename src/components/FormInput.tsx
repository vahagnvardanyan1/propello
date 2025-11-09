"use client";

import { forwardRef, useState } from "react";
import type { InputHTMLAttributes } from "react";

import { motion, AnimatePresence } from "motion/react";
import { AlertCircle, CheckCircle2, Eye, EyeOff } from "lucide-react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

import { colors, spacing, borderRadius, transitions } from "@/theme/theme";

interface FormInputProps
  extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  error?: string;
  success?: string;
  helperText?: string;
  multiline?: boolean;
  rows?: number;
  showPasswordToggle?: boolean;
}

const InputWrapper = styled(Box)({
  width: "100%",
});

const Label = styled("label")({
  display: "block",
  marginBottom: spacing.sm,
  color: colors.midnightBlue,
  fontWeight: 500,
});

const RequiredIndicator = styled("span")({
  color: "#ef4444",
  marginLeft: spacing.xs,
});

const InputContainer = styled(Box)({
  position: "relative",
});

const BaseInputStyled = styled("input", {
  shouldForwardProp: (prop) =>
    !["hasError", "hasSuccess", "isFocused", "hasPasswordToggle"].includes(
      prop as string,
    ),
})<{
  hasError: boolean;
  hasSuccess: boolean;
  isFocused: boolean;
  hasPasswordToggle: boolean;
}>(({ hasError, hasSuccess, isFocused, hasPasswordToggle }) => ({
  width: "100%",
  padding: `14px ${spacing.base}`,
  backgroundColor: colors.white,
  border: `2px solid ${
    hasError
      ? "#ef4444"
      : hasSuccess
        ? "#10b981"
        : isFocused
          ? colors.midnightBlue
          : colors.ivory
  }`,
  borderRadius: borderRadius.xl,
  transition: `all ${transitions.base}`,
  fontSize: "16px",
  minHeight: "48px",
  color: colors.midnightBlue,
  paddingRight:
    hasPasswordToggle || hasError || hasSuccess ? "48px" : spacing.base,

  "&::placeholder": {
    color: `${colors.dustyBlue}80`,
  },

  "&:hover:not(:disabled)": {
    borderColor: hasError
      ? "#dc2626"
      : hasSuccess
        ? "#059669"
        : colors.dustyBlue,
  },

  "&:focus": {
    outline: "none",
    boxShadow: hasError
      ? "0 0 0 4px rgba(239, 68, 68, 0.1)"
      : hasSuccess
        ? "0 0 0 4px rgba(16, 185, 129, 0.1)"
        : `0 0 0 4px ${colors.midnightBlue}1a`,
  },

  "&:disabled": {
    backgroundColor: "#f9fafb",
    cursor: "not-allowed",
  },

  "@media (min-width: 640px)": {
    padding: `12px ${spacing.base}`,
  },
}));

const BaseTextareaStyled = styled("textarea", {
  shouldForwardProp: (prop) =>
    !["hasError", "hasSuccess", "isFocused"].includes(prop as string),
})<{
  hasError: boolean;
  hasSuccess: boolean;
  isFocused: boolean;
}>(({ hasError, hasSuccess, isFocused }) => ({
  width: "100%",
  padding: `14px ${spacing.base}`,
  backgroundColor: colors.white,
  border: `2px solid ${
    hasError
      ? "#ef4444"
      : hasSuccess
        ? "#10b981"
        : isFocused
          ? colors.midnightBlue
          : colors.ivory
  }`,
  borderRadius: borderRadius.xl,
  transition: `all ${transitions.base}`,
  fontSize: "16px",
  minHeight: "48px",
  color: colors.midnightBlue,
  fontFamily: "inherit",
  resize: "vertical",

  "&::placeholder": {
    color: `${colors.dustyBlue}80`,
  },

  "&:hover:not(:disabled)": {
    borderColor: hasError
      ? "#dc2626"
      : hasSuccess
        ? "#059669"
        : colors.dustyBlue,
  },

  "&:focus": {
    outline: "none",
    boxShadow: hasError
      ? "0 0 0 4px rgba(239, 68, 68, 0.1)"
      : hasSuccess
        ? "0 0 0 4px rgba(16, 185, 129, 0.1)"
        : `0 0 0 4px ${colors.midnightBlue}1a`,
  },

  "&:disabled": {
    backgroundColor: "#f9fafb",
    cursor: "not-allowed",
  },

  "@media (min-width: 640px)": {
    padding: `12px ${spacing.base}`,
  },
}));

const IconsContainer = styled(Box)({
  position: "absolute",
  right: spacing.md,
  top: "50%",
  transform: "translateY(-50%)",
  display: "flex",
  alignItems: "center",
  gap: spacing.sm,
});

const ToggleButton = styled("button")({
  color: colors.dustyBlue,
  padding: spacing.xs,
  border: "none",
  background: "none",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: `color ${transitions.base}`,

  "&:hover": {
    color: colors.midnightBlue,
  },
});

const MessageText = styled(motion.p, {
  shouldForwardProp: (prop) => prop !== "messageType",
})<{ messageType: "error" | "success" | "helper" }>(({ messageType }) => ({
  marginTop: spacing.sm,
  fontSize: "14px",
  display: "flex",
  alignItems: "center",
  gap: spacing.xs,
  color:
    messageType === "error"
      ? "#dc2626"
      : messageType === "success"
        ? "#059669"
        : colors.dustyBlue,
}));

export const FormInput = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  FormInputProps
>(
  (
    {
      label,
      error,
      success,
      helperText,
      multiline = false,
      rows = 4,
      showPasswordToggle = false,
      type = "text",
      id,
      className = "",
      required,
      disabled,
      ...props
    },
    ref,
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const inputId = id || `input-${label.toLowerCase().replace(/\s+/g, "-")}`;
    const errorId = `${inputId}-error`;
    const helperId = `${inputId}-helper`;
    const inputType = showPasswordToggle && !showPassword ? "password" : type;

    return (
      <InputWrapper className={className}>
        <Label htmlFor={inputId}>
          {label}
          {required && (
            <RequiredIndicator aria-label="required">*</RequiredIndicator>
          )}
        </Label>

        <InputContainer>
          {multiline ? (
            <BaseTextareaStyled
              ref={ref as React.Ref<HTMLTextAreaElement>}
              id={inputId}
              rows={rows}
              disabled={disabled}
              required={required}
              aria-invalid={error ? "true" : "false"}
              aria-describedby={
                error ? errorId : helperText || success ? helperId : undefined
              }
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              hasError={!!error}
              hasSuccess={!!success}
              isFocused={isFocused}
              {...props}
            />
          ) : (
            <BaseInputStyled
              ref={ref as React.Ref<HTMLInputElement>}
              id={inputId}
              type={inputType}
              disabled={disabled}
              required={required}
              aria-invalid={error ? "true" : "false"}
              aria-describedby={
                error ? errorId : helperText || success ? helperId : undefined
              }
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              hasError={!!error}
              hasSuccess={!!success}
              isFocused={isFocused}
              hasPasswordToggle={showPasswordToggle}
              {...props}
            />
          )}

          <IconsContainer>
            {showPasswordToggle && type === "password" && (
              <ToggleButton
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </ToggleButton>
            )}

            {error && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                style={{ color: "#ef4444", display: "flex" }}
              >
                <AlertCircle size={20} />
              </motion.div>
            )}

            {success && !error && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                style={{ color: "#10b981", display: "flex" }}
              >
                <CheckCircle2 size={20} />
              </motion.div>
            )}
          </IconsContainer>
        </InputContainer>

        <AnimatePresence mode="wait">
          {error && (
            <MessageText
              messageType="error"
              id={errorId}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              role="alert"
            >
              <AlertCircle size={16} />
              {error}
            </MessageText>
          )}

          {success && !error && (
            <MessageText
              messageType="success"
              id={helperId}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <CheckCircle2 size={16} />
              {success}
            </MessageText>
          )}

          {helperText && !error && !success && (
            <MessageText
              messageType="helper"
              id={helperId}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {helperText}
            </MessageText>
          )}
        </AnimatePresence>
      </InputWrapper>
    );
  },
);

FormInput.displayName = "FormInput";
