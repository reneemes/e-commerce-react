import './ProductCard.scss';

function ProductCard({ id, img, name, price, description, type}) {

  return (
    <div className='product-card' id={id} type={type}>
      <img src={img} alt={`Photo of ${name}`} loading="lazy"/>
      <h2>{name}</h2>
      <p>${price}</p>
      <p>{description}</p>
    </div>
  )
}

export default ProductCard;