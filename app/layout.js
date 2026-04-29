import "../styles/globals.css";
import Link from "next/link";

export const metadata = {
  title: "ITI Rendering Lab",
  description: "CSR, SSR, SSG, and ISR examples with product data"
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/csr", label: "CSR" },
  { href: "/ssr", label: "SSR" },
  { href: "/ssg", label: "SSG" },
  { href: "/isr", label: "ISR" }
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="nav">
          <strong>Next Rendering</strong>
          <div>
            {navLinks.map((link) => (
              <Link href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
