import Item from "../Item/Item"

function ItemList({products}) {
  return (
    <div className="container d-flex flex-wrap justify-content-center align-items-center" style={{gap:"40px"}}>
        {products.map(product => <Item key={product.id} product={product} />)}
    </div>
  )
}

export default ItemList