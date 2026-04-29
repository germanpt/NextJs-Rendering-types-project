export default function ProductGrid({ products }) {
  return (
    <section className="productGrid">
      {products.map((product) => (
        <article className="productCard" key={product.id}>
          <div className="imageBox">
            <img
              src={product.image}
              alt={product.title}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="productBody">
            <p className="category">{product.category}</p>
            <h2>{product.title}</h2>
            <p className="price">${product.price}</p>
          </div>
        </article>
      ))}
    </section>
  );
}
