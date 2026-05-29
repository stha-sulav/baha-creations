import { HeaderCta } from "@/feat/shared/header/components/header-cta";
import { Navbar } from "@/feat/shared/header/components/navbar";
import { Logo } from "@/feat/shared/logo";
import { ThemeModeToggle } from "@/feat/shared/theme/components/theme-mode-toggle";

export function Header() {
  return (
    <header className="p-4 flex items-center justify-between lg:gap-10">
      <Logo />
      <div className="flex items-center gap-2 lg:w-full text-3xl">
        <Navbar />
        <div className="flex items-center gap-2">
          <ThemeModeToggle />
          <HeaderCta className="hidden md:block" />
        </div>
      </div>
    </header>
  );
}
