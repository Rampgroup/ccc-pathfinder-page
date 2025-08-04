import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-gradient-primary text-white hover:shadow-glow hover:scale-105 rounded-full",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-full",
        outline:
          "border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white rounded-full",
        secondary:
          "bg-gradient-secondary text-white hover:shadow-glow hover:scale-105 rounded-full",
        accent:
          "bg-gradient-accent text-white hover:shadow-glow hover:scale-105 rounded-full",
        ghost: "hover:bg-primary/10 hover:text-primary rounded-full",
        link: "text-primary underline-offset-4 hover:underline",
        cta: "bg-gradient-to-r from-secondary to-secondary-light text-white font-bold shadow-medium hover:shadow-large hover:scale-105 rounded-full",
        "cta-outline": "border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white hover:scale-105 rounded-full",
        modern: "bg-white text-primary border border-primary/20 hover:bg-primary hover:text-white shadow-soft hover:shadow-medium rounded-2xl",
        hero: "bg-gradient-accent text-accent-foreground shadow-glow hover:shadow-large hover:scale-105 transition-all duration-300 font-bold rounded-full",
        gradient: "bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300 rounded-full",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-9 px-4 py-2 text-sm",
        lg: "h-14 px-8 py-4 text-lg",
        xl: "h-16 px-10 py-5 text-xl",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
