export type NavigationLink = {
  id: number;
  name: string;
  href: string;
};

export const links: NavigationLink[] = [
  { id: 1, name: "ホーム", href: "/" },
  { id: 2, name: "メッセージ", href: "/message" },
  { id: 3, name: "会社概要", href: "/company" },
];
