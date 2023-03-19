import { useState } from "react"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useUserContext } from "../context/userContext"


const Pizza = () => {

    
    const {precio, setPrecio} = useUserContext()

    const [Pizza, SetPizza] = useState()

    const [SelectedPizza, SetSelectedPizza] = useState({})

    const [loading, SetLoading] = useState(true)
    
    const params = useParams()
    

    const apiJSON = async () => {
        try{
        const archivoJSON = await fetch("/pizzas.json")
        const originalJSON = await archivoJSON.json()
        console.log(originalJSON)
        SetSelectedPizza(originalJSON[params.pizza])

        }catch(error){
        console.error(error)
        }finally{
            SetLoading(false)
        }
    }

    useEffect(() => {
        apiJSON()
        SetPizza(params.pizza)
    }, [])

    return (
        loading ? (
            <p>Cargando...</p>
        ) : (
            
            <div className="card mt-5">
            <div className="row g-0">
                <div className="col-md-4">
                    <img className="pizzaDetalle rounded-pill" src={SelectedPizza.img} alt="..."/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h3 className="text-dark">{SelectedPizza.name.toUpperCase()}</h3>
                    <p className="card-text text-dark">{SelectedPizza.desc}</p>
                    <b className="text-dark">INGREDIENTES</b>
                    <ul className="text-dark">
                        <li >{SelectedPizza.ingredients[0].toUpperCase()}</li>
                        <li >{SelectedPizza.ingredients[1].toUpperCase()}</li>
                        <li >{SelectedPizza.ingredients[2].toUpperCase()}</li>
                        <li >{SelectedPizza.ingredients[3].toUpperCase()}</li>
                    </ul>
                    <div className="d-flex align-items-end flex-column justify-content-end gap-2 mb-3">
                        <p className="m-0 texto-precio-antes text-black-50">ANTES {SelectedPizza.price + 5000}</p>
                        <h5 className="texto-precio text-dark">${SelectedPizza.price}</h5>
                        <a onClick={() => setPrecio(precio + SelectedPizza.price)} className="btn btn-dark">AÑADIR</a>
                        <p className="text-black-50">Incluye despacho a domicilio gratis.</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
        )

    )
}

export default Pizza