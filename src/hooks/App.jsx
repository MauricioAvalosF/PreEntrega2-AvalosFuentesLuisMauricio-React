import Item from "../components/Item/Item"
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer"
import NavBar from "../components/NavBar/NavBar"
// import Catalogo from "./pages/Catalogo"
import Home from "./pages/Home"
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/catalogo" element={<ItemListContainer greeatings={"Todos productos"}/>}></Route>
        <Route path="/catalogo/:categoryId" element={<ItemListContainer greeatings={"Audio productos"}/>}></Route>
        <Route path="/detalle/:productId" element={<ItemDetailContainer/>}></Route>
        <Route path="*" element={<h1>404 not found</h1>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
