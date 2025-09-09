import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "../ui/button";

export const PrimaryButton = ({
  className,
  handleClick,
  disabled,
}: {
  className?: string;
  handleClick?: () => void;
  disabled?: boolean;
}) => {
  const [animationClass, setAnimationClass] = useState("");

  const handleMouseEnter = () => {
    setAnimationClass("animate-hover-bounce");
  };

  const handleMouseLeave = () => {
    setAnimationClass("animate-hover-bounce-reverse");
  };

  return (
    <Button
      className={cn(
        "h-auto px-3 sm:px-4 py-2 sm:py-3 bg-syracuse_red_orange text-white font-label-medium font-[number:var(--label-medium-font-weight)] text-sm sm:text-[length:var(--label-medium-font-size)] tracking-[var(--label-medium-letter-spacing)] leading-[var(--label-medium-line-height)] [font-style:var(--label-medium-font-style)] whitespace-nowrap [--animation-delay:0ms]",
        className
      )}
      onClick={handleClick}
      disabled={disabled}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={animationClass}>Etape suivante</div>
    </Button>
  );
};
