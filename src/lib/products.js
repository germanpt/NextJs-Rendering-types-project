import products from "../data/products.json";

const apiUrl = "https://api.escuelajs.co/api/v1/products";

export function getProductsFromJson(limit = 8) {
  return products.slice(0, limit);
}

function normalizeApiProduct(product) {
  return {
    id: product.id,
    title: product.title,
    price: product.price,
    category: product.category?.name || "Product",
    image: Array.isArray(product.images) ? product.images[0] : product.image
  };
}

export async function getProductsFromApi(limit = 8, options = {}) {
  try {
    const response = await fetch(`${apiUrl}?offset=0&limit=${limit}`, options);

    if (!response.ok) {
      throw new Error("Fake Store API request failed");
    }

    const data = await response.json();
    return data.map(normalizeApiProduct);
  } catch {
    return getProductsFromJson(limit);
  }
}
