import Image from "next/image";
import BahaLogo from "@/app/icon.svg";
import { cn } from "../../lib/utils";

export interface LogoProps {
  className?: string;
  showTypography?: boolean;
}

export function Logo({ className, showTypography = true }: LogoProps) {
  return (
    <div className={cn("flex gap-1 items-center", className)}>
      <Image src={BahaLogo} alt="Baha Creation Logo" className="size-10" />
      {showTypography && (
        <p className="leading-none text-lg">
          <span className="block font-bold text-primary">Baha</span>Creations
        </p>
      )}
    </div>
  );
}
