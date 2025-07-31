import { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface GovInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  hint?: string;
  error?: string;
}

const GovInput = forwardRef<HTMLInputElement, GovInputProps>(
  ({ label, hint, error, className, id, ...props }, ref) => {
    const inputId = id || label.toLowerCase().replace(/\s+/g, '-');
    const hintId = hint ? `${inputId}-hint` : undefined;
    const errorId = error ? `${inputId}-error` : undefined;

    return (
      <div className="mb-6">
        <label 
          htmlFor={inputId}
          className="block text-base font-semibold mb-2 text-foreground"
        >
          {label}
        </label>
        
        {hint && (
          <div id={hintId} className="text-govuk-mid-grey text-sm mb-2">
            {hint}
          </div>
        )}
        
        {error && (
          <div id={errorId} className="text-destructive text-sm font-semibold mb-2">
            <span className="inline-block mr-2">⚠</span>
            {error}
          </div>
        )}
        
        <input
          ref={ref}
          id={inputId}
          className={cn(
            "govuk-input w-full",
            error && "border-destructive border-4",
            className
          )}
          aria-describedby={[hintId, errorId].filter(Boolean).join(' ') || undefined}
          {...props}
        />
      </div>
    );
  }
);

GovInput.displayName = "GovInput";

export default GovInput;