import { links } from "@/lib/utils/navigationLinks";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-red-1 text-white">
      <div className="mx-auto max-w-292.5 px-5 pt-10 pb-7.5 md:px-7.5 md:pt-15 md:pb-12.5">
        <ul className="flex gap-6.25 text-[12px] leading-none font-extrabold md:gap-7.5 md:text-[14px]">
          {links.map((link) => (
            <li key={link.id}>
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <div className="pt-5 text-[12px] leading-3.5 font-medium tracking-[0.03em]">
          &copy;START
        </div>
      </div>
    </footer>
  );
}
