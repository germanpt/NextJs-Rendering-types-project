import PageLayout from "../../src/components/PageLayout";
import ProductGrid from "../../src/components/ProductGrid";
import { getProductsFromApi } from "../../src/lib/products";

export default async function SSGPage() {
  const products = await getProductsFromApi(8, { cache: "force-cache" });

  return (
    <PageLayout
      label="SSG"
      title="Static Site Generation"
      description='This server component fetches MockAPI records once and caches them using cache: "force-cache".'
      generatedAt={new Date().toLocaleString()}
    >
      <ProductGrid products={products} />
    </PageLayout>
  );
}
