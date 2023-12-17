import { Link } from "react-router-dom"

export default function CardCarro(props) {

    function excluir() {
        fetch(`http://localhost:8080/carros/${props.carros.id}`,
            {
                method: 'DELETE'
            })
            .then(x => alert('Veículo excluido com sucesso'))
            
    }

    return (

        <div className="conatiner bg-info ">

            <div className="card col-md-4">

                <div className="card-body">

                    <h3 className="card-title">Carro</h3>

                    <img src="https://media.gazetadopovo.com.br/2020/01/17155825/lamborghini-huracan-Alexander-Migl-wikimedia-commons.jpg"
                        className="card-img-top" alt="..."></img>

                    <div className="card-text" >
                        <span className="fw-bold">Proprietário: </span>
                        <span className="">{props.carros.dono}</span>
                    </div>

                    <div className="card-text" >
                        <span className="fw-bold">Marca: </span>
                        <span>{props.carros.marca}</span>
                    </div>

                    <div className="card-text" >
                        <span className="fw-bold">Modelo: </span>
                        <span>{props.carros.modelo}</span>
                    </div>

                    <div className="card-text" >
                        <span className="fw-bold">Ano: </span>
                        <span>{props.carros.ano}</span>
                    </div>

                    <div className="mt-3 d-flex justify-content-between">
                        <Link to={`/carros/editar/${props.carros.id}`}>
                            <button
                                className="btn btn-outline-primary"
                            >Editar</button>
                        </Link>
                        <button
                            onClick={excluir}
                            className="btn btn-danger"
                        >Excluir</button>
                    </div>

                </div>
            </div>

        </div>
    )
}