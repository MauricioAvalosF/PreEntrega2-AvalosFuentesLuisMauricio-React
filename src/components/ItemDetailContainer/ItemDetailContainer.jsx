import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../hooks/miapi";

function ItemDetailContainer() {
    const [product, setProduct] = useState({});
    const { productId } = useParams();

    useEffect(() => {
        getProductById(productId)
            .then((res) => {
                console.log(res);
                setProduct(res);
            })
            .catch((error) => {
                console.error("Error fetching product:", error);
            });
    }, [productId]);

    return (
        <div className="container card justify-content-center align-items-center">
            {product ? <h1>{product.name}</h1> : <p>Loading...</p>}
            <p>{product.category}</p>
            <p>${product.price} {product.currency}</p>
            <p>{product.brand}</p>
            <p>{product.stock}</p>
            <p>{product.description}</p>
        </div>
    );
}

export default ItemDetailContainer;
