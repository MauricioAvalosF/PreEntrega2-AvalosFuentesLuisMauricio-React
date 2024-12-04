import { Link } from "react-router-dom"
import { useCart } from "../../hooks/useCart"
import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.css'


function ItemDetail({product}) {

  const { id, name, price, description, currency, stock } = product;

  const { addItem, isInCart } = useCart();
  const handleAdd = (count) => {
    const productToAdd = {
      id, name, price, quantity: count
    }
    addItem(productToAdd)
  }

  return (
      <div className="carta">
        <h2>{name}</h2>
        <p>${price} {currency}</p>
        <p>{description}</p>
        <Link to={`/detalle/${id}`} > Ver más acerca de este producto</Link>

        {
        isInCart(id) ? (
          <a>Producto agregado al carrito</a>
        ):
        (
          <ItemCount stock={stock} onAdd={ handleAdd } />
        )
      }
    </div>
  
    
  )
}

export default ItemDetail