import { useState } from "react"

export default function Consulta(){

  const [carros, setCarros] = useState([])

  function Consultar(){
    fetch("http://localhost:8080/carros")
    .then(data => data.json())
    .then(response => setCarros(response))
  }
    useEffect(Consultar,[])
 
    return(
        <div>
            <h2>Consulta dos Carros</h2>
           <div className='d-flex flex-wrap'>
            {
                carros.map(ct => <ShowContato contato={ct}/>)
            }
            </div>
        </div>
    )