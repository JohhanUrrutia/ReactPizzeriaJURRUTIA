import { useUserContext } from "../context/userContext"

const Cart = () => {


    const {pizzaUno, pizzaDos, pizzaTres, pizzaCuatro, pizzaCinco, pizzaSeis, totalPizza} = useUserContext()

    return (
        <div className="d-flex flex-column align-items-end">
            {pizzaUno > 0 ? (
            <div className="bg-success p-3 d-flex w-100 justify-content-between rounded-pill mt-2 align-items-center">
                <div className="d-flex flex-column">
                <p className="text-light m-0">Pizza</p>
                <h4 className="text-light">Napolitana</h4>
                </div>
                <div className="d-flex flex-column align-items-end justify-content-center">
                    <p className="text-light m-0">Precio Unitario</p>
                    <h5 className="text-light m-0">$5.950</h5>
                    <p className="text-light m-0">Cantidad: {pizzaUno}un.</p>
                </div>
            </div>
            ) : undefined}
            {pizzaDos > 0 ? (
            <div className="bg-success p-3 d-flex w-100 justify-content-between rounded-pill mt-2 align-items-center">
                <div className="d-flex flex-column">
                <p className="text-light m-0">Pizza</p>
                <h4 className="text-light">Española</h4>
                </div>
                <div className="d-flex flex-column align-items-end justify-content-center">
                    <p className="text-light m-0">Precio Unitario</p>
                    <h5 className="text-light m-0">$7.250</h5>
                    <p className="text-light m-0">Cantidad: {pizzaDos}un.</p>
                </div>
            </div>
            ) : undefined}
            {pizzaTres > 0 ? (
            <div className="bg-success p-3 d-flex w-100 justify-content-between rounded-pill mt-2 align-items-center">
                <div className="d-flex flex-column">
                <p className="text-light m-0">Pizza</p>
                <h4 className="text-light">Salame</h4>
                </div>
                <div className="d-flex flex-column align-items-end justify-content-center">
                    <p className="text-light m-0">Precio Unitario</p>
                    <h5 className="text-light m-0">$5.990</h5>
                    <p className="text-light m-0">Cantidad: {pizzaTres}un.</p>
                </div>
            </div>
            ) : undefined}
            {pizzaCuatro > 0 ? (
            <div className="bg-success p-3 d-flex w-100 justify-content-between rounded-pill mt-2 align-items-center">
                <div className="d-flex flex-column">
                <p className="text-light m-0">Pizza</p>
                <h4 className="text-light">Cuatro Estaciones</h4>
                </div>
                <div className="d-flex flex-column align-items-end justify-content-center">
                    <p className="text-light m-0">Precio Unitario</p>
                    <h5 className="text-light m-0">$9.590</h5>
                    <p className="text-light m-0">Cantidad: {pizzaCuatro}un.</p>
                </div>
            </div>
            ) : undefined}
            {pizzaCinco > 0 ? (
            <div className="bg-success p-3 d-flex w-100 justify-content-between rounded-pill mt-2 align-items-center">
                <div className="d-flex flex-column">
                <p className="text-light m-0">Pizza</p>
                <h4 className="text-light">Bacon</h4>
                </div>
                <div className="d-flex flex-column align-items-end justify-content-center">
                    <p className="text-light m-0">Precio Unitario</p>
                    <h5 className="text-light m-0">$6.450</h5>
                    <p className="text-light m-0">Cantidad: {pizzaCinco}un.</p>
                </div>
            </div>
            ) : undefined}
            {pizzaSeis > 0 ? (
            <div className="bg-success p-3 d-flex w-100 justify-content-between rounded-pill mt-2 align-items-center">
                <div className="d-flex flex-column">
                <p className="text-light m-0">Pizza</p>
                <h4 className="text-light">Pollo Picante</h4>
                </div>
                <div className="d-flex flex-column align-items-end justify-content-center">
                    <p className="text-light m-0">Precio Unitario</p>
                    <h5 className="text-light m-0">$8.500</h5>
                    <p className="text-light m-0">Cantidad: {pizzaSeis}un.</p>
                </div>
            </div>
            ) : undefined}
            {totalPizza > 0 ? (
                <div className="bg-dark text-light p-2 rounded-pill mt-2">
                    <h5>Total ${totalPizza}</h5>
                </div>
            ) : undefined}
        </div>
    )
}

export default Cart