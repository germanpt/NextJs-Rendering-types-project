import products from "../data/products.json";

const apiUrl = "https://69f09964c1533dbedc9d55cb.mockapi.io/name";

export function getProductsFromJson(limit = 8) {
  return products.slice(0, limit);
}

function normalizeApiProduct(product, index) {
  return {
    id: product.id,
    title: product.name,
    price: Number(product.id),
    category: product.comments || "MockAPI User",
    image: product.avatar || products[index % products.length].image
  };
}

export async function getProductsFromApi(limit = 8, options = {}) {
  try {
    const response = await fetch(apiUrl, options);

    if (!response.ok) {
      throw new Error("Fake Store API request failed");
    }

    const data = await response.json();
    return data.slice(0, limit).map(normalizeApiProduct);
  } catch {
    return getProductsFromJson(limit);
  }
}
