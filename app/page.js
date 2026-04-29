import Link from "next/link";

const pages = [
  {
    title: "CSR",
    name: "Client Side Rendering",
    href: "/csr",
        description: "Client component fetches MockAPI records after the page loads."
  },
  {
    title: "SSR",
    name: "Server Side Rendering",
    href: "/ssr",
        description: "Server component fetches MockAPI records on every request using cache: no-store."
  },
  {
    title: "SSG",
    name: "Static Site Generation",
    href: "/ssg",
        description: "Server component fetches MockAPI records once and caches them using cache: force-cache."
  },
  {
    title: "ISR",
    name: "Incremental Static Regeneration",
    href: "/isr",
        description: "Server component fetches cached MockAPI records and refreshes them with revalidate."
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
          product-style cards from the same MockAPI image logic used in the reference repo.
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
