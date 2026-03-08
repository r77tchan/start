"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

const links = [
  { name: "ホーム", href: "/" },
  { name: "メッセージ", href: "/message" },
  { name: "会社概要", href: "/company" },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={menuRef}>
      <header className="flex h-15 items-center justify-between py-5 pl-5 md:h-22.5 md:px-17.5 md:py-7.5">
        <Link href="/" aria-label="ホーム">
          <img src="logo.svg" alt="Logo" className="w-26.75 md:w-41.75" />
        </Link>
        <nav className="hidden md:block">
          <ul className="flex items-center gap-7.5 font-extrabold">
            {links.map((link) => (
              <li
                key={link.href}
                className={pathname === link.href ? "text-red-1" : ""}
              >
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <button
          className="bg-red-1 z-2 flex h-15 w-15 cursor-pointer items-center justify-center md:hidden"
          aria-label="メニュー"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="relative block h-5 w-7">
            <span
              className={`absolute top-0 left-0 h-0.5 w-7 bg-white transition-all duration-200 ${isOpen ? "translate-y-2 rotate-45" : ""}`}
            ></span>
            <span
              className={`absolute top-2 left-0 h-0.5 w-7 bg-white transition-all duration-200 ${isOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`absolute top-4 left-0 h-0.5 w-7 bg-white transition-all duration-200 ${isOpen ? "-translate-y-2 -rotate-45" : ""}`}
            ></span>
          </span>
        </button>
      </header>

      <nav
        className={`bg-red-1 fixed top-0 right-0 z-1 h-screen w-45 pt-15 transition-transform duration-200 md:hidden ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <ul className="flex flex-col gap-6.25 pt-7.5 pl-12.5 leading-none font-bold text-white">
          {links.map((link) => (
            <li
              key={link.href}
              className={` ${pathname === link.href ? "opacity-60" : ""}`}
            >
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
