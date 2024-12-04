import { useState } from "react"
import useCounter from "../../hooks/useCounter";
import './ItemCount.css'

function ItemCount({ initialValue = 1, stock, onAdd }) {
  const { increment, decrement, valor: count } = useCounter(initialValue)

  return (
    <>
      <div className="numeros">
        <label htmlFor="numero">Cantidad: </label><input type="number" id="numero" value={count} />
      </div>
      <div className="botones">
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={() => onAdd(count)}>Agregar al carrito</button>
      </div>
    </>
  );
}

export default ItemCount