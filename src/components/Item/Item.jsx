import { Link } from "react-router-dom"

function Item({product}) {
  return (
    <div className="card" style={{width: "20rem"}}>
        <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p>${product.price} {product.currency}</p>
        <p>{product.description}</p>
        <Link to={`/detalle/${product.id}`} > Ver más </Link>
        </div>
    </div>
  )
}

export default Item