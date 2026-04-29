import PageLayout from "../../src/components/PageLayout";
import ProductGrid from "../../src/components/ProductGrid";
import { getProductsFromApi } from "../../src/lib/products";

export default async function SSRPage() {
  const products = await getProductsFromApi(8, { cache: "no-store" });

  return (
    <PageLayout
      label="SSR"
      title="Server Side Rendering"
      description='This server component fetches products on every request using cache: "no-store".'
      generatedAt={new Date().toLocaleString()}
    >
      <ProductGrid products={products} />
    </PageLayout>
  );
}
