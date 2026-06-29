

async function getProducts() {
  const res = await fetch(
    'https://fakestoreapi.com/products',
    {
      next: {
        revalidate: 60,
      },
    }
  );

  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div>
      <h1>Products</h1>

      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
}