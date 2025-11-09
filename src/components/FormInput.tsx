"use client";

import { type InputHTMLAttributes, forwardRef, useState } from 'react';

import { motion, AnimatePresence } from 'motion/react';
import { AlertCircle, CheckCircle2, Eye, EyeOff } from 'lucide-react';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  error?: string;
  success?: string;
  helperText?: string;
  multiline?: boolean;
  rows?: number;
  showPasswordToggle?: boolean;
}

export const FormInput = forwardRef<HTMLInputElement | HTMLTextAreaElement, FormInputProps>(
  (
    {
      label,
      error,
      success,
      helperText,
      multiline = false,
      rows = 4,
      showPasswordToggle = false,
      type = 'text',
      id,
      className = '',
      required,
      disabled,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    
    const inputId = id || `input-${label.toLowerCase().replace(/\s+/g, '-')}`;
    const errorId = `${inputId}-error`;
    const helperId = `${inputId}-helper`;
    const inputType = showPasswordToggle && !showPassword ? 'password' : type;

    const baseInputStyles = `
      w-full px-4 py-3.5 sm:py-3
      bg-white border-2 rounded-xl 
      transition-all duration-200
      placeholder:text-[var(--dusty-blue)]/50
      disabled:bg-gray-50 disabled:cursor-not-allowed
      focus:outline-none
      text-[16px]
      min-h-[48px]
    `;

    const stateStyles = error
      ? 'border-red-500 focus:border-red-600 focus:ring-4 focus:ring-red-500/10'
      : success
      ? 'border-green-500 focus:border-green-600 focus:ring-4 focus:ring-green-500/10'
      : isFocused
      ? 'border-[var(--midnight-blue)] ring-4 ring-[var(--midnight-blue)]/10'
      : 'border-[var(--ivory)] hover:border-[var(--dusty-blue)] active:border-[var(--midnight-blue)]';

    const InputComponent = multiline ? 'textarea' : 'input';

    return (
      <div className={`w-full ${className}`}>
        <label 
          htmlFor={inputId}
          className="block mb-2 text-[var(--midnight-blue)] font-medium"
        >
          {label}
          {required && <span className="text-red-500 ml-1" aria-label="required">*</span>}
        </label>

        <div className="relative">
          <InputComponent
            ref={ref as any}
            id={inputId}
            type={inputType}
            rows={multiline ? rows : undefined}
            disabled={disabled}
            required={required}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={
              error ? errorId : helperText || success ? helperId : undefined
            }
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={`${baseInputStyles} ${stateStyles} ${
              showPasswordToggle ? 'pr-12' : ''
            } ${error || success ? 'pr-12' : ''}`}
            {...props}
          />

          {/* Status Icons */}
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
            {showPasswordToggle && type === 'password' && (
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-[var(--dusty-blue)] hover:text-[var(--midnight-blue)] transition-colors p-1"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            )}
            
            {error && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="text-red-500"
              >
                <AlertCircle size={20} />
              </motion.div>
            )}
            
            {success && !error && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="text-green-500"
              >
                <CheckCircle2 size={20} />
              </motion.div>
            )}
          </div>

          {/* Focus Ring Animation */}
          <AnimatePresence>
            {isFocused && !error && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="absolute inset-0 rounded-lg border-2 border-[var(--buttercream)] pointer-events-none"
                style={{ marginTop: -2, marginLeft: -2, marginRight: -2, marginBottom: -2 }}
              />
            )}
          </AnimatePresence>
        </div>

        {/* Error/Success/Helper Text */}
        <AnimatePresence mode="wait">
          {error && (
            <motion.p
              id={errorId}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-2 text-sm text-red-600 flex items-center gap-1"
              role="alert"
            >
              <AlertCircle size={16} />
              {error}
            </motion.p>
          )}
          
          {success && !error && (
            <motion.p
              id={helperId}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-2 text-sm text-green-600 flex items-center gap-1"
            >
              <CheckCircle2 size={16} />
              {success}
            </motion.p>
          )}
          
          {helperText && !error && !success && (
            <motion.p
              id={helperId}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-2 text-sm text-[var(--dusty-blue)]"
            >
              {helperText}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    );
  }
);

FormInput.displayName = 'FormInput';
