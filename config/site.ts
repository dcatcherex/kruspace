export const siteConfig = {
  name: "KRU SPACE",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    // {
    //   title: "บทความ",
    //   href: "/blog",
    // },
    {
      title: "ไอเดียการสอน",
      href: "/library",
    },
    {
      title: "AI เพื่อการศึกษา",
      href: "/ai",
    },
    {
      title: "เพื่อนครู",
      href: "/krubuddy",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}

export type SiteConfig = typeof siteConfig
