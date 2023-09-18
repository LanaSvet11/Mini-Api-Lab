import React, { useEffect, useState } from "react";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products") // Replace 'API_URL_HERE' with your actual API URL
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <strong>Name:</strong> {product.name}, <strong>Price:</strong> $
            {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
