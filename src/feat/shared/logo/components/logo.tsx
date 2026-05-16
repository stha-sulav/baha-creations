import Image from "next/image";
import BahaLogo from "@/app/icon.svg";
import { cn } from "../../lib/utils";

export interface LogoProps {
  className?: string;
  showTypography?: boolean;
  iconSize?: number;
}

export function Logo({
  className,
  showTypography = true,
  iconSize = 10,
}: LogoProps) {
  return (
    <div className={cn("flex gap-1 items-center", className)}>
      <Image
        src={BahaLogo}
        alt="Baha Creation Logo"
        className={`size-${iconSize}`}
      />
      {showTypography && (
        <p className="leading-none text-lg">
          <span className="block font-bold text-primary">Baha</span>Creations
        </p>
      )}
    </div>
  );
}
