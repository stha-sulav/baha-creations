"use client";

import { Menu } from "lucide-react";
import { Accordion } from "@/feat/shared/components/ui/accordion";
import { Button } from "@/feat/shared/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/feat/shared/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/feat/shared/components/ui/sheet";
import { RenderMenuItem } from "@/feat/shared/header/components/render-menu-items";
import { menuItems } from "@/feat/shared/header/header.constant";
import { Media } from "@/feat/shared/header/header.types";
import { cn } from "@/feat/shared/lib/utils";
import { Logo } from "@/feat/shared/logo";

export function Navbar({className}: {className?: string}) {
  return (
    <section className={cn("py-4 order-1 lg:mx-auto lg:order-0", className)}>
      <MobileMenu />
      <DesktopMenu />
    </section>
  );
}

export function DesktopMenu() {
  return (
    <nav className="hidden items-center justify-between lg:flex">
      <div className="flex items-center">
        <NavigationMenu>
          <NavigationMenuList>
            <RenderMenuItem menuItems={menuItems} media={Media.DESKTOP} />
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}

export function MobileMenu() {
  return (
    <div className="block lg:hidden">
      <div className="flex items-center justify-between">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="size-4" />
            </Button>
          </SheetTrigger>
          <SheetContent className="overflow-y-auto">
            <SheetHeader>
              <SheetTitle>
                <Logo />
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-6 p-4">
              <Accordion
                type="single"
                collapsible
                className="flex w-full flex-col gap-4"
              >
                <RenderMenuItem menuItems={menuItems} />
              </Accordion>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
