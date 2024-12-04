import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"

function NavBar({cartCount, tittle}) {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    Mi Ecommerce
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/catalogo">Catalogo de prodcutos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/catalogo/Audio">Audio</Link>
                        </li>
                    </ul>
                </div>
                <CartWidget cartCount={cartCount}/>
            </div>
        </nav>
    )
}

export default NavBar