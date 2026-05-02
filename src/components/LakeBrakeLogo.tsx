import logoImg from "@/assets/lake-break-logo.png";
import { cn } from "@/lib/utils";

interface LakeBreakLogoProps {
  /** Kept for API compatibility; logo is full-color gold on charcoal in the asset. */
  variant?: "dark" | "light";
  /** Max height in px when `heightClass` is omitted. */
  size?: number;
  /** Tailwind classes for responsive height (e.g. `max-h-9 md:max-h-11`). Overrides `size`. */
  heightClass?: string;
  className?: string;
}

const LakeBreakLogo = ({
  variant: _variant = "dark",
  size = 48,
  heightClass,
  className,
}: LakeBreakLogoProps) => {
  const usesResponsiveHeight = Boolean(heightClass);

  return (
    <img
      src={logoImg}
      alt="Lake Break"
      className={cn(
        "object-contain object-left w-auto max-w-[min(76vw,11rem)] sm:max-w-[12rem]",
        heightClass,
        className,
      )}
      style={{
        height: "auto",
        width: "auto",
        ...(usesResponsiveHeight ? {} : { maxHeight: size }),
        filter: "drop-shadow(0 1px 2px hsl(0 0% 0% / 0.35))",
      }}
    />
  );
};

export default LakeBreakLogo;
