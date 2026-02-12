import './ProductPage.scss';
import { useState, useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard';

function ProductPage() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("all");
  const [maxPrice, setMaxPrice] = useState(10);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/v1/products');
        const data = await response.json();
        setProducts(data.products);
      } catch (e) {
        console.error('Error fetching products: ', e);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter(product => {
    const matchesType =
      category === "all" || product.type === category;
    
    const matchesPrice =
      product.price <= maxPrice;

    return matchesType && matchesPrice;
  });

  console.log('filteredProducts: ', filteredProducts)

  return (
    <div className='product-page'>
      <h1 className='product-page__title'>Shop Bagels</h1>
      <div className='product-page__filters'>
        <label>
          Max Price: ${maxPrice}
          <input
            type="range"
            min="0"
            max="10"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </label>

        <div>
          <p>Product Type:</p>

          <label>
            <input
              type="checkbox"
              value="all"
              checked={category === "all"}
              onChange={(e) => setCategory(e.target.value)}
            />
            All
          </label>

          <label>
            <input
              type="checkbox"
              value="bites"
              checked={category === "bites"}
              onChange={(e) => setCategory(e.target.value)}
            />
            Bites
          </label>

          <label>
            <input
              type="checkbox"
              value="bagel"
              checked={category === "bagel"}
              onChange={(e) => setCategory(e.target.value)}
            />
            Bagels
          </label>

          <label>
            <input
              type="checkbox"
              value="sandwich"
              checked={category === "sandwich"}
              onChange={(e) => setCategory(e.target.value)}
            />
            Sandwiches
          </label>

          <label>
            <input
              type="checkbox"
              value="spread"
              checked={category === "spread"}
              onChange={(e) => setCategory(e.target.value)}
            />
            Spreads
          </label>
        </div>
      </div>
      <section className="product-page__product-sec">
        {
          filteredProducts.map(product => {
            return (
              <ProductCard 
                key={product.id}
                id={product.id}
                type={product.type}
                img={product.img_url}
                name={product.name}
                price={product.price}
                description={product.description}
              />
            )
          })
        }
      </section>
    </div>
  )
}

export default ProductPage;