import { useUserContext } from "../context/userContext"
import { NavLink } from "react-router-dom"

const Header = () => {

    const {totalPizza} = useUserContext()

    return (
        <div className="bg-success p-3 d-flex justify-content-between align-items-center">
            <h3 className="rounded-pill bg-dark text-light p-2">Pizza Mamma Mia!🍕</h3>
            <nav className="d-flex gap-3">
                <NavLink className="btn btn-dark rounded-pill" to={"/"}>INICIO</NavLink>
                <NavLink className="btn btn-dark rounded-pill" to={"/Pizzas"}>PIZZAS</NavLink>
            </nav>
            <NavLink className="btn btn-dark rounded-pill" to={"/Cart"}>CARRITO</NavLink>
            {totalPizza > 0 ? <h5 className="text-light bg-dark p-2 rounded-pill">${totalPizza}</h5> : undefined }
        </div>
    )
}

export default Header