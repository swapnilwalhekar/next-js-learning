"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Login", href: "/login" },
  { name: "Register", href: "/register" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function ProductDetailsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <div>
      <div>
        <input type="text" />
      </div>

      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);

        return (
          <div key={link.href} className="">
            <Link href={link.href} className={isActive ? "" : ""}>
              {link.name}
            </Link>
          </div>
        );
      })}
      {children}
    </div>
  );
}
