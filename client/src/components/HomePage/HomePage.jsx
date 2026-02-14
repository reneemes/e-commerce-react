import './HomePage.scss';
import '@splidejs/splide/dist/css/splide.min.css';
// import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
import { Link } from 'react-router-dom';
import { Splide, SplideSlide } from '@splidejs/react-splide';

function HomePage() {

  return (
    <div className='main-body'>


      <div className='main-body__hero'>

        <Splide
          options={ {
            rewind: true,
            height: 400,
          } }  
        >
          <SplideSlide>
            <img className='main-body__hero--img' src='/assets/bagel-hero.jpg' alt='Bagels photo'/>
          </SplideSlide>
          <SplideSlide>
            <img className='main-body__hero--img' src='/assets/classic-spread.jpg' alt='Bagel spread photo'/>
          </SplideSlide>
          <SplideSlide>
            <img className='main-body__hero--img' src='/assets/bagel-hero2.avif' alt='Bagels and jam photo'/>
          </SplideSlide>
        </Splide>

        <div className='main-body__hero--txt'>
          <h1>Bagel Bites</h1>
        </div>
      </div>
      <section className='main-description'>
        <p className='main-description__greeting'>Welcome to Bagel Bites, where every bagel is freshly baked and bursting with flavor!</p>
        <p className='main-description__about'>
          From classic favorites like Everything and Blueberry to bold creations like
          Jalapeño Cheddar and Pizza Bagels, we’ve got something to satisfy every craving.
          Pair them with our creamy spreads or fresh toppings for the perfect 
          start to your day. Whether you’re a bagel connoisseur or just here for a tasty treat, 
          you’ll find our bagels are soft, chewy, and impossible to resist. Dive in, explore our flavors, 
          and let your taste buds celebrate!
        </p>
      </section>
      <section className='main-links'>
        <Link className='main-links__btn' to={'/shop'}>Shop Bagels</Link>
        <Link className='main-links__btn' to={'/contact'}>Contact Us</Link>
      </section>
    </div>
  )
}

export default HomePage;