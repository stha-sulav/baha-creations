import type { LucideIcon } from "lucide-react";

export interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: LucideIcon;
  items?: MenuItem[];
}

export interface NavbarProps {
  className?: string;
  menu?: MenuItem[];
}

export type DesktopMenuProps = {} & Pick<NavbarProps, "menu">;
