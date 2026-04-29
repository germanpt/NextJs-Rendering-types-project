"use client";

import { useEffect, useState } from "react";
import PageLayout from "../../src/components/PageLayout";
import ProductGrid from "../../src/components/ProductGrid";
import { getProductsFromApi } from "../../src/lib/products";

export default function CSRPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductsFromApi()
      .then((data) => setProducts(data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <PageLayout
      label="CSR"
      title="Client Side Rendering"
      description="This page uses a client component and fetches products in useEffect."
    >
      {loading ? (
        <p className="status">Loading products from the browser...</p>
      ) : (
        <ProductGrid products={products} />
      )}
    </PageLayout>
  );
}
