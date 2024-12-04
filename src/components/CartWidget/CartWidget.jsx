
import './CartWidget.css';
import { useCart } from "../../hooks/useCart";
import { Link } from 'react-router-dom';

function CardWidget() {

    const { totalQuantity } = useCart();
    //const {totalQuantity} = useContext(CartContext);
    return (
        <Link className='cart' to={'/cart'}>
            <span>{totalQuantity}</span>
            <i className="fa-solid fa-cart-shopping fa-bounce"></i>
        </Link>
    )
}

export default CardWidget;