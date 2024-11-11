import { useEffect, useState } from "react"
import {getProducts, getProductsByCategory} from '../../hooks/miapi'
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

function ItemListContainer({greeatings}){
    const [product, setProducts] = useState([])
    const {categoryId} = useParams()

    useEffect(() => {
        const asyncFunction = categoryId ? getProductsByCategory : getProducts
     asyncFunction(categoryId)
     .then(data => setProducts(data))
    }, [categoryId])

    return(
        <div>
            <h2 className="text-center">{greeatings}</h2>
            <ItemList products={product} />
        </div>
    )
}

export default ItemListContainer
