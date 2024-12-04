import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../hooks/miapi";
import { useCart } from "../../hooks/useCart";
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetailContainer.css'

function ItemDetailContainer() {
    const [product, setProduct] = useState(null); // Cambiar estado inicial a null
    const { productId } = useParams();

    useEffect(() => {
        getProductById(productId)
            .then((res) => {
                console.log("Product fetched:", res); // Muestra el resultado
                setProduct(res);
            })
            .catch((error) => {
                console.error("Error fetching product:", error);
            });
    }, [productId]);

    const { addItem, isInCart } = useCart();

    const handleAdd = (count) => {
        if (product) { // Asegurarse de que el producto esté cargado
            const productToAdd = {
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: count,
            };
            addItem(productToAdd);
        }
    };

    if (!product) {
        return <p>Loading...</p>; // Mostrar loading mientras no haya producto
    }

    return (
        <div className="contenedior">
            <h1>{product.name}</h1>
            <p>Categoria: {product.category}</p>
            <p>Precio: ${product.price} {product.currency}</p>
            <p>Marca: {product.brand}</p>
            <p>Stock: {product.stock}</p>
            <p>{product.description}</p>
            {
                isInCart(product.id) ? (
                    <p>Producto agregado al carrito, revise la cesta y continue con la compra</p>
                ) :
                    (
                        <ItemCount stock={product.stock} onAdd={handleAdd} />
                    )
            }
        </div>
    );
}

export default ItemDetailContainer;
