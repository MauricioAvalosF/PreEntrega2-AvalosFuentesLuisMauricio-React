import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import { useCart } from "../../hooks/useCart"
import './Cart.css'
import useCounter from "../../hooks/useCounter";
export default function Cart() {

  const {cart, clearCart, getTotal, totalQuantity} = useCart();

  const total = getTotal();

  if(totalQuantity === 0){
    return <h1>No hay items en el carrito</h1>
  }



  return (
    <div className="carrito">
      <h1>Carrito: </h1>
      {cart.map((item)=> (
        <CartItem key={item.id} {...item}/>
      ))}
      <h2 className="total">Total: ${total}</h2>
      <div>
        <button onClick={clearCart} className="btn btn-primary">Limpiar Carrito</button>
      </div>
      <Link to="/checkout" className="btn btn-success mt-3">Checkout</Link>
    </div>
  );
}