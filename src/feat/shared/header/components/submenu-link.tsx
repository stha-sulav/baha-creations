import { Link } from "next-transition-router";
import type { MenuItem } from "@/feat/shared/header/header.types";

export function SubMenuLink({ item }: { item: MenuItem }) {
  return (
    <Link
      className="flex min-w-80 flex-row gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-muted hover:text-accent-foreground"
      href={item.url}
    >
      {item.icon && <div className="text-foreground">{item.icon}</div>}
      <div>
        <div className="text-sm font-semibold">{item.title}</div>
        {item.description && (
          <p className="text-sm leading-snug text-muted-foreground">
            {item.description}
          </p>
        )}
      </div>
    </Link>
  );
}
