import {useCart} from '../../hooks/useCart'
import './CartItem.css'
import useCounter from '../../hooks/useCounter';
export default function CartItem({id, name, quantity, price}) {
  const {removeItem} = useCart()
    const { increment, decrement, valor } = useCounter(quantity);

  const handleRemove = (id) => {
    removeItem(id)
  }

  return (
    <article>
      <header>
        <h2>{name}</h2>
      </header>
      <section>
        <p>Cantidad: {quantity}</p>
        <p>Precio individual: $ {price}</p>
      </section>
      <footer>
        <p>Subtotal: $ {price * quantity}</p>
        <button className="remove" onClick={() => handleRemove(id)}>
          remove
        </button>
        <button className="add" onClick={increment}>+</button>
        <span>{valor}</span>
        <button className="delete" onClick={decrement}>-</button>
      </footer>
    </article>
  );
}