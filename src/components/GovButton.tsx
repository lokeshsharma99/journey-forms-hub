import { ReactNode, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface GovButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "warning";
  size?: "default" | "large";
}

const GovButton = ({ 
  children, 
  variant = "primary", 
  size = "default", 
  className, 
  ...props 
}: GovButtonProps) => {
  const baseClasses = "govuk-button font-semibold text-center inline-block cursor-pointer transition-all duration-200 focus:govuk-focus";
  
  const variantClasses = {
    primary: "bg-success text-success-foreground hover:bg-success/90",
    secondary: "govuk-button--secondary",
    warning: "govuk-button--warning"
  };
  
  const sizeClasses = {
    default: "py-3 px-6 text-base",
    large: "py-4 px-8 text-lg"
  };

  return (
    <button 
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default GovButton;