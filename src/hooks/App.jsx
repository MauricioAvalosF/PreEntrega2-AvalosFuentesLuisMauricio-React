import ItemDetail from "../components/ItemDetail/ItemDetail";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import NavBar from "../components/NavBar/NavBar";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "../components/context/CartContext";
import Cart from "../components/Cart/Cart";
import Checkout from "../components/Checkout/Checkout";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/catalogo"
            element={<ItemListContainer greeatings={"Todos productos"} />}
          />
          <Route
            path="/catalogo/:categoryId"
            element={<ItemListContainer greeatings={"Audio productos"} />}
          />
          <Route path="/detalle/:productId" element={<ItemDetailContainer />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route path="*" element={<h1>404 not found</h1>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
