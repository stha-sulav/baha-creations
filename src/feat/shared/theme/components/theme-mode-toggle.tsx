"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/feat/shared/components/ui/button";

export function ThemeModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by waiting until mounted on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {mounted && resolvedTheme === "dark" ? (
        <Moon className="h-[1.2rem] w-[1.2rem] text-neutral-100 transition-all" />
      ) : (
        <Sun className="h-[1.2rem] w-[1.2rem] text-neutral-900 transition-all" />
      )}
    </Button>
  );
}
