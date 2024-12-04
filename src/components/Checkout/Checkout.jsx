import { useState } from "react";
import { useCart } from "../../hooks/useCart";
import { getProductsByIds , updateProductStock, createOrder as saveOrder } from "../../hooks/miapi";
import './Checkout.css'

export default function Checkout() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [phone, setPhone] = useState("");
  const [direccion, setDireccion] = useState("");
  const [orderCreated, setOrderCreated] = useState(false);

  const { cart, totalQuantity, getTotal, clearCart } = useCart();
  const total = getTotal();

  const createOrder = (e) => {
    e.preventDefault();

    const objOrder = {
      buyer: {
        firstName: nombre,
        lastName: apellido,
        phone: phone,
        address: direccion,
      },
      items: cart,
      totalQuantity,
      total,
      date: new Date(),
    };

    const ids = cart.map((item) => item.id);
    const productsFromApi = getProductsByIds (ids);

    const outOfStock = [];
    productsFromApi.forEach((product) => {
      const cartItem = cart.find((item) => item.id === product.id);
      if (product.stock < cartItem.quantity) {
        outOfStock.push(product);
      }
    });

    if (outOfStock.length === 0) {
      cart.forEach((item) => {
        updateProductStock(item.id, item.quantity);
      });

      // Crear orden
      saveOrder(objOrder).then((order) => {
        console.log(`El ID de su orden es: ${order.id}`);
        clearCart();
        setOrderCreated(true);
      });
    } else {
      console.log("Hay productos fuera de stock:", outOfStock);
    }
  };

  if (orderCreated) {
    return <h1>La orden fue creada correctamente</h1>;
  }

  return (
    <>
      <h1>Checkout</h1>
      <form>
        <label>Nombre:</label>
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        <br />
        <label>Apellido:</label>
        <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
        <br />
        <label>Phone:</label>
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <br />
        <label>Direccion:</label>
        <input type="text" value={direccion} onChange={(e) => setDireccion(e.target.value)} />
        <br />
        <button type="submit" className="btn btn-primary" onClick={createOrder}>
          Generar Orden
        </button>
      </form>
    </>
  );
}
