import { Button } from "../ui/button";

export const PrimaryButton = ({
  className,
  handleClick,
}: {
  className?: string;
  handleClick?: () => void;
}) => {
  return (
    <Button
      className={`h-auto px-4 py-3 bg-syracuse_red_orange text-white font-label-medium font-[number:var(--label-medium-font-weight)] text-[length:var(--label-medium-font-size)] tracking-[var(--label-medium-letter-spacing)] leading-[var(--label-medium-line-height)] [font-style:var(--label-medium-font-style)]${className}`}
      onClick={handleClick}
    >
      Etape suivante
    </Button>
  );
};
