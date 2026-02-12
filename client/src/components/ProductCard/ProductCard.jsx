import './ProductCard.scss';

function ProductCard({ id, img, name, price, description, type}) {

  return (
    <div className='product-card' id={id} type={type}>
      <img src={img} alt={name}/>
      <h2>{name}</h2>
      <p>${price}</p>
      <p>{description}</p>
      {/* <p>{type}</p> */}
    </div>
  )
}

export default ProductCard;