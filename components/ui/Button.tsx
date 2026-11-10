import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium uppercase tracking-widest transition-colors disabled:cursor-not-allowed disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary: "bg-ink text-white hover:bg-ink/85",
  outline: "border border-ink text-ink hover:bg-ink hover:text-white",
  ghost: "text-ink underline-offset-4 hover:underline",
};

interface CommonProps {
  variant?: Variant;
  className?: string;
  children: ReactNode;
}

type ButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type LinkProps = CommonProps & { href: string };

export default function Button(props: ButtonProps | LinkProps) {
  const { variant = "primary", className = "", children, href, ...rest } = props;
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href !== undefined) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" {...rest} className={classes}>
      {children}
    </button>
  );
}
