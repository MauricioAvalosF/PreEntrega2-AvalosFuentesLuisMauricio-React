import Item from "../ItemDetail/ItemDetail"
import './ItemList.css'

function ItemList({ products }) {
  return (
      <div className="lsita">
          {products.map((product) => (
              <Item key={product.id} product={product} /> // Asegúrate de que `product` tenga las propiedades correctas
          ))}
      </div>
  );
}

export default ItemList