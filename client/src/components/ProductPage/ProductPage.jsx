import './ProductPage.scss';
import { useState } from 'react';

function ProductPage() {
  const [category, setCategory] = useState("all");
  const [maxPrice, setMaxPrice] = useState(20);

  return (
    <div className='product-page'>
      <h1 className='product-page__title'>Shop Bagels</h1>
      <div className='product-page__filters'>
        <label>
          Max Price: ${maxPrice}
          <input
            type="range"
            min="0"
            max="20"
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
              value="bagel-bites"
              checked={category === "bagel-bites"}
              onChange={(e) => setCategory(e.target.value)}
            />
            Bites
          </label>

          <label>
            <input
              type="checkbox"
              value="bagels"
              checked={category === "bagels"}
              onChange={(e) => setCategory(e.target.value)}
            />
            Bagels
          </label>

          <label>
            <input
              type="checkbox"
              value="sandwiches"
              checked={category === "sandwiches"}
              onChange={(e) => setCategory(e.target.value)}
            />
            Sandwiches
          </label>

          <label>
            <input
              type="checkbox"
              value="spreads"
              checked={category === "spreads"}
              onChange={(e) => setCategory(e.target.value)}
            />
            Spreads
          </label>
        </div>
      </div>
      <section className='product-page__product-sec'></section>
    </div>
  )
}

export default ProductPage;