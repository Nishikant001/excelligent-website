import { forwardRef } from "react";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "text" | "gradient" | "outlineLight";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 ease-premium focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const sizes: Record<Size, string> = {
  sm: "text-sm px-4 py-2 rounded-full",
  md: "text-[15px] px-6 py-3 rounded-full",
  lg: "text-base px-8 py-4 rounded-full",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-white shadow-sm hover:bg-primary-dark hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "bg-secondary text-white shadow-sm hover:bg-secondary-dark hover:-translate-y-0.5 active:translate-y-0",
  outline:
    "border border-primary/40 text-primary bg-transparent hover:border-primary hover:bg-primary hover:text-white",
  ghost: "bg-surface-muted text-text-primary hover:bg-border",
  text: "text-primary hover:text-primary-dark px-0 py-0 rounded-none",
  // Homepage / dark-section variants (design language: electric blue -> violet
  // "AI" gradient primary action, glass outline secondary action).
  gradient:
    "bg-gradient-to-r from-primary to-violet text-white shadow-[0_8px_30px_-8px_rgba(124,92,255,0.6)] hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0",
  outlineLight:
    "border border-white/30 text-white bg-white/5 backdrop-blur-sm hover:border-white/60 hover:bg-white/10",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  children: ReactNode;
  className?: string;
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button" };
type ButtonAsAnchor = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { as: "a"; href: string };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  function Button(
    { variant = "primary", size = "md", withArrow, children, className = "", ...rest },
    ref
  ) {
    const classes = `${base} ${variant === "text" ? "" : sizes[size]} ${variants[variant]} ${className}`;

    if (rest.as === "a") {
      const anchorProps = rest as ButtonAsAnchor;
      const { as, ...restAnchorProps } = anchorProps;
      void as;
      // Internal links use client-side routing (no full page reload);
      // external / mailto / tel / new-tab links stay plain anchors.
      if (restAnchorProps.href.startsWith("/") && !restAnchorProps.target) {
        const { href, ...linkProps } = restAnchorProps;
        return (
          <Link ref={ref as React.Ref<HTMLAnchorElement>} to={href} className={classes} {...linkProps}>
            {children}
            {withArrow && <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />}
          </Link>
        );
      }
      return (
        <a ref={ref as React.Ref<HTMLAnchorElement>} className={classes} {...restAnchorProps}>
          {children}
          {withArrow && <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />}
        </a>
      );
    }

    const buttonProps = rest as ButtonAsButton;
    const { as, ...restButtonProps } = buttonProps;
    void as;
    return (
      <button ref={ref as React.Ref<HTMLButtonElement>} className={classes} {...restButtonProps}>
        {children}
        {withArrow && <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />}
      </button>
    );
  }
);
