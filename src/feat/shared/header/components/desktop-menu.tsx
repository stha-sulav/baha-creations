import {
  NavigationMenu,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";
import type { DesktopMenuProps } from "../header.types";
import { RenderMenuItem } from "./render-menu-items";

export function DesktopMenu({ menu }: DesktopMenuProps) {
  return (
    <nav className="hidden items-center justify-between lg:flex">
      <div className="flex items-center">
        <NavigationMenu>
          <NavigationMenuList>
            {menu?.map((item) => <RenderMenuItem key={item.title} item= {item}/>)}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}
