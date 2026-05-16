import { Book, Sunset, Trees, Zap } from "lucide-react";
import type { MenuItem } from "@/feat/shared/header/header.types";

export const menuItems: MenuItem[] = [
  { id: 1, title: "Home", url: "/" },
  {
    id: 2,
    title: "Services",
    url: "/services",
    items: [
      {
        id: 2.1,
        title: "Blog",
        description: "The latest industry news, updates, and info",
        icon: <Book className="size-5 shrink-0" />,
        url: "/blog",
      },
      {
        id: 2.2,
        title: "Company",
        description: "Our mission is to innovate and empower the world",
        icon: <Trees className="size-5 shrink-0" />,
        url: "/company",
      },
      {
        id: 2.3,
        title: "Careers",
        description: "Browse job listing and discover our workspace",
        icon: <Sunset className="size-5 shrink-0" />,
        url: "/careers",
      },
      {
        id: 2.4,
        title: "Support",
        description:
          "Get in touch with our support team or visit our community forums",
        icon: <Zap className="size-5 shrink-0" />,
        url: "/support",
      },
    ],
  },
  {
    title: "Resources",
    url: "/resources",
    id: 3,
    items: [
      {
        id: 3.1,
        title: "Help Center",
        description: "Get all the answers you need right here",
        icon: <Zap className="size-5 shrink-0" />,
        url: "/help-center",
      },
      {
        id: 3.2,
        title: "Contact Us",
        description: "We are here to help you with any questions you have",
        icon: <Sunset className="size-5 shrink-0" />,
        url: "/constact-us",
      },
      {
        id: 3.3,
        title: "Status",
        description: "Check the current status of our services and APIs",
        icon: <Trees className="size-5 shrink-0" />,
        url: "/status",
      },
      {
        id: 3.4,
        title: "Terms of Service",
        description: "Our terms and conditions for using our services",
        icon: <Book className="size-5 shrink-0" />,
        url: "terms-of-services",
      },
    ],
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Blog",
    url: "/blogs",
  },
];
