import './HomePage.scss';

function HomePage() {

  return (
    <div className="main-body">
      <section className="main-body__hero">
        <img className="main-body__hero--img" src="https://www.kingarthurbaking.com/sites/default/files/styles/featured_image_2x/public/2025-04/Chewy-Everything-Bagels_Shot_4_027.jpg?itok=brHI0RTZ" alt="Bagels"/>
        <div className="main-body__hero--txt">
          <p>Bagel Bites</p>
        </div>
      </section>
      <section className="main-description">
        <p className="main-description__greeting">Welcome to Bagel Bites, where every bagel is freshly baked and bursting with flavor!</p>
        <p className="main-description__about">
          From classic favorites like Everything and Blueberry to bold creations like
          Jalapeño Cheddar and Pizza Bagels, we’ve got something to satisfy every craving.
          Pair them with our creamy spreads or fresh toppings for the perfect 
          start to your day. Whether you’re a bagel connoisseur or just here for a tasty treat, 
          you’ll find our bagels are soft, chewy, and impossible to resist. Dive in, explore our flavors, 
          and let your taste buds celebrate!
        </p>
      </section>
      <section className="main-links">
        <a className="main-links__btn" href="product-page/products.html">Shop Bagels</a>
        <a className="main-links__btn" href="contact-page/contact.html">Contact Us</a>
      </section>
    </div>
  )
}

export default HomePage;