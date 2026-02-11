import './ProductCard.scss';

function ProductCard({ id, img, name, price, description}) {

  return (
    <div className='product-card' id={id}>
      <img src={img} alt={name}/>
      <h2>{name}</h2>
      <p>${price.toFixed(2)}</p>
      <p>{description}</p>
    </div>
  )
}

export default ProductCard;