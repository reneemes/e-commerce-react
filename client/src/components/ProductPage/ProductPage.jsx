import './ProductPage.scss';
import { useState, useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard';

function ProductPage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
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

  const handleCategoryChange = (value) => {
    setCategories((prev) => {
      if (value === 'all') {
        return [];
      }

      if (prev.includes(value)) {
        return prev.filter((c) => c !== value);
      } else {
        return [...prev, value];
      }
    })
  }

  const filteredProducts = products.filter(product => {
    const matchesType =
      categories.length === 0 || categories.includes(product.type);
    
    const matchesPrice =
      product.price <= maxPrice;

    return matchesType && matchesPrice;
  });

  const clearFilters = () => {
    setCategories([]);
    setMaxPrice(10);
  }

  return (
    <div className='product-page'>
      <h1 className='product-page__title'>Shop Bagels</h1>
      <div className='product-page__filters'>
        <label className='product-page__filters--slider'>
          <span className='product-page__filters--title'>Max Price:</span> ${maxPrice}
          <input
            type="range"
            min="0"
            max="10"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </label>

        <div className='product-page__filters--types'>
          <fieldset>
            <legend className='product-page__filters--title'>Product Type:</legend>
            {/* <label>
              <input
                type="checkbox"
                value="all"
                checked={categories.length === 0}
                onChange={(e) => setCategories(e.target.value)}
              />
              All
            </label> */}

            <label>
              <input
                type="checkbox"
                value="bites"
                checked={categories.includes("bites")}
                onChange={(e) => handleCategoryChange(e.target.value)}
              />
              Bites
            </label>

            <label>
              <input
                type="checkbox"
                value="bagel"
                checked={categories.includes("bagel")}
                onChange={(e) => handleCategoryChange(e.target.value)}
              />
              Bagels
            </label>

            <label>
              <input
                type="checkbox"
                value="sandwich"
                checked={categories.includes("sandwich")}
                onChange={(e) => handleCategoryChange(e.target.value)}
              />
              Sandwiches
            </label>

            <label>
              <input
                type="checkbox"
                value="spread"
                checked={categories.includes("spread")}
                onChange={(e) => handleCategoryChange(e.target.value)}
              />
              Spreads
            </label>
          </fieldset>

          <button className="product-page__filters--clear" onClick={clearFilters}>Clear Filters</button>

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