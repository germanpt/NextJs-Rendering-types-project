import PageLayout from "../../src/components/PageLayout";
import ProductGrid from "../../src/components/ProductGrid";
import { getProductsFromApi } from "../../src/lib/products";

export default async function ISRPage() {
  const products = await getProductsFromApi(8, {
    next: { revalidate: 30 }
  });

  return (
    <PageLayout
      label="ISR"
      title="Incremental Static Regeneration"
      description="This server component caches products and refreshes them in the background every 30 seconds."
      generatedAt={new Date().toLocaleString()}
    >
      <ProductGrid products={products} />
    </PageLayout>
  );
}
