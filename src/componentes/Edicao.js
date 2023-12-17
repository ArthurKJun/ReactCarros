import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function Edicao() {

    const [dono, setDono] = useState('')
    const [marca, setMarca] = useState('')
    const [modelo, setModelo] = useState('')
    const [ano, setAno] = useState('')
    const [placa, setPlaca] = useState('')
    const [chassi, setChassi] = useState('')
    const [renavam, setRenavam] = useState('')

    const { idCarro } = useParams()

    function salvar() {

        if (dono === '') {
            alert('Informe o Proprietário')
            return
        }

        if (marca === '') {
            alert('Informe a Marca')
            return
        }

        if (modelo === '') {
            alert('Informe o Modelo')
            return
        }

        if (ano === '') {
            alert('Informe o Ano de Fabricação')
            return
        }

        if (placa === '') {
            alert('Informe a Placa')
            return
        }

        if (chassi === '') {
            alert('Informe o chassi')
            return
        }

        if (renavam === '') {
            alert('Informe o Renavam')
            return
        }

        let obj = { id: idCarro, dono, marca, modelo, ano, placa, chassi, renavam }

        fetch(`http://localhost:8080/carros/${idCarro}`,
            {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(obj)

            })
            .then(x => alert('Veiculo alterado com sucesso'))
    }

    useEffect(() => {
        fetch(`http://localhost:8080/carros/${idCarro}`)
            .then(data => data.json())
            .then(response => {
                setDono(response.dono)
                setMarca(response.marca)
                setModelo(response.modelo)
                setAno(response.ano)
                setPlaca(response.placa)
                setChassi(response.chassi)
                setRenavam(response.renavam)
            })
    },[idCarro])

    return (
        <div className="container">

            <h2 className="text-center">Editar Veiculo: {idCarro}</h2>

            <label className="form-label">Informe o Proprietário</label>
            <input
                className="form-control"
                type="text"
                placeholder="Informe o Nome do Proprietário"
                value={dono}
                onChange={txt => setDono(txt.target.value)}
            />

            <label className="form-label">Informe a Marca</label>
            <input
                className="form-control"
                type="text"
                placeholder="Informe a Marca"
                value={marca}
                onChange={txt => setMarca(txt.target.value)}
            />

            <label className="form-label">Informe o Modelo</label>
            <input
                className="form-control"
                type="text"
                placeholder="Informe o Modelo do veiculo"
                value={modelo}
                onChange={txt => setModelo(txt.target.value)}
            />

            <label className="form-label">Informe o Ano</label>
            <input
                className="form-control"
                type="text"
                placeholder="Informe o Ano do veiculo"
                value={ano}
                onChange={txt => setAno(txt.target.value)}
            />

            <label className="form-label">Informe a Placa</label>
            <input
                className="form-control"
                type="text"
                placeholder="Informe a Placa do veiculo"
                value={placa}
                onChange={txt => setPlaca(txt.target.value)}
            />

            <label className="form-label">Informe o Chassis</label>
            <input
                className="form-control"
                type="text"
                placeholder="Informe o chassis do veiculo"
                value={chassi}
                onChange={txt => setChassi(txt.target.value)}
            />

            <label className="form-label">Informe o Renavam</label>
            <input
                className="form-control"
                type="text"
                placeholder="Informe o Renavam do veiculo"
                value={renavam}
                onChange={txt => setRenavam(txt.target.value)}
            />

            <div className="mt-3 d-flex justify-content-between">
                <button onClick={salvar} className="btn btn-primary">Salvar</button>
                <button className="btn btn-danger">Cancelar</button>
            </div>


        </div>
    )
}