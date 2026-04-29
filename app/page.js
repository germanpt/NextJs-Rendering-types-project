import Link from "next/link";

const pages = [
  {
    title: "CSR",
    name: "Client Side Rendering",
    href: "/csr",
    description: "Client component fetches products from the API after the page loads."
  },
  {
    title: "SSR",
    name: "Server Side Rendering",
    href: "/ssr",
    description: "Server component fetches products on every request using cache: no-store."
  },
  {
    title: "SSG",
    name: "Static Site Generation",
    href: "/ssg",
    description: "Server component fetches products once and caches them using cache: force-cache."
  },
  {
    title: "ISR",
    name: "Incremental Static Regeneration",
    href: "/isr",
    description: "Server component fetches cached products and refreshes them with revalidate."
  }
];

export default function Home() {
  return (
    <main className="container">
      <section className="pageHeader">
        <p className="eyebrow">ITI Next.js Lab</p>
        <h1>Rendering Types With Fake Store Products</h1>
        <p>
          A simple App Router website showing CSR, SSR, SSG, and ISR using
          product data and image URLs from a fake store API.
        </p>
      </section>

      <section className="renderGrid">
        {pages.map((page) => (
          <Link className="renderCard" href={page.href} key={page.href}>
            <span>{page.title}</span>
            <h2>{page.name}</h2>
            <p>{page.description}</p>
          </Link>
        ))}
      </section>
    </main>
  );
}
