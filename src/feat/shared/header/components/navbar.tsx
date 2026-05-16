import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../../components/ui/navigation-menu";
import { cn } from "../../lib/utils";
import type { NavbarProps } from "../header.types";
import { DesktopMenu } from "./desktop-menu";
import { MobileNav } from "./mobile-menu";

export function Navbar({ className, menu }: NavbarProps) {
  return (
    <section className={cn("py-4", className)}>
      <MobileNav />
      <DesktopMenu />
    </section>
  );
}
