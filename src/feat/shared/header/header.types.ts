export interface MenuItem {
  id: number;
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

export enum Media {
  MOBILE,
  DESKTOP,
}

export type RenderMenuItemProps = {
  menuItems?: MenuItem[];
  media?: Media;
};
