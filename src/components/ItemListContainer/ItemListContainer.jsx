import { useEffect, useState } from "react"
import {getProducts, getProductsByCategory} from '../../hooks/miapi'
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import './ItemListContainer.css'

function ItemListContainer({ greeatings }) {
    const [products, setProducts] = useState([]); // Cambia el nombre del estado a plural
    const { categoryId } = useParams();

    useEffect(() => {
        const asyncFunction = categoryId ? getProductsByCategory : getProducts;

        asyncFunction(categoryId)
            .then((data) => {
                setProducts(data); 
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
            });
    }, [categoryId]);

    return (
        <div className="grande">
            <div className="cont">
            <h2 className="text-center">{greeatings}</h2>
            <ItemList products={products} /> 
            </div>
        </div>
    );
}


export default ItemListContainer
