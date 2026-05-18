import { Link } from "next-transition-router";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/feat/shared/components/ui/accordion";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/feat/shared/components/ui/navigation-menu";
import { SubMenuLink } from "@/feat/shared/header/components/submenu-link";
import {
  Media,
  type MenuItem,
  type RenderMenuItemProps,
} from "@/feat/shared/header/header.types";

export function RenderMenuItem({
  menuItems,
  media = Media.MOBILE,
}: RenderMenuItemProps) {
  if (!menuItems || menuItems.length === 0) return null;

  return (
    <>
      {menuItems.map((item) => {
        switch (media) {
          case Media.DESKTOP:
            return <RenderDesktopMenuItems key={item.id} item={item} />;
          case Media.MOBILE:
            return <RenderMobileMenuItems key={item.id} item={item} />;
          default:
            return null;
        }
      })}
    </>
  );
}

export function RenderDesktopMenuItems({ item }: { item: MenuItem }) {
  if (item.items) {
    return (
      <NavigationMenuItem>
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent className="bg-popover text-popover-foreground">
          {item.items?.map((subItem) => (
            <NavigationMenuLink asChild key={subItem.title} className="w-80">
              <SubMenuLink item={subItem} />
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }
  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        asChild
      >
        <Link className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground" href={item.url}>
          {item.title}
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}

export default function RenderMobileMenuItems({ item }: { item: MenuItem }) {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items?.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <Link key={item.title} href={item.url} className="text-md font-semibold">
      {item.title}
    </Link>
  );
}
