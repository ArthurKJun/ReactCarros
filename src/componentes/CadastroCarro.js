import { useState } from "react"

export default function Cadastro() {

    const [dono, setDono] = useState('')
    const [marca, setMarca] = useState('')
    const [modelo, setModelo] = useState('')
    const [anofab, setAnofab] = useState('')
    const [anomod, setAnoMod] = useState('')
    const [placa, setPlaca] = useState('')
    const [chassi, setCahssi] = useState('')
    const [renavam, setRenavam] = useState('')


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

        if (anofab === '') {
            alert('Informe o Ano de Fabricação')
            return
        }

        if (anomod === '') {
            alert('Informe o Ano do Modelo')
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

        let obj = { dono, marca, modelo, anofab, anomod, placa, chassi, renavam }

        fetch('http://localhost:8080/carros',
            {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(obj)

            })
            .then(x => alert('cadastro do carro criado com sucesso'))
    }
    return (
        <div className="container">

            <h2 className="text-center">Novo Carro</h2>

            <label className="form-label">Informe o Proprietário</label>
            <input
                className="form-control"
                type="text"
                placeholder="Informe o nome do Proprietário"
                onChange={txt => setDono(txt.target.value)}
            />

            <label className="form-label">Informe a Marca</label>
            <input
                className="form-control"
                type="text"
                placeholder="Informe a Marca do veículo"
                onChange={txt => setMarca(txt.target.value)}
            />

            <label className="form-label">Informe o Modelo</label>
            <input
                className="form-control"
                type="text"
                placeholder="Informe o Modelo do veículo"
                onChange={txt => setModelo(txt.target.value)}
            />

            <label className="form-label">Informe o Modelo</label>
            <input
                className="form-control"
                type="text"
                placeholder="Informe o Modelo do veículo"
                onChange={txt => setModelo(txt.target.value)}
            />

            <div className="mt-3 d-flex justify-content-between">
                <button onClick={salvar} className="btn btn-primary">Salvar</button>
                <button className="btn btn-danger">Cancelar</button>
            </div>

            {/* <ShowContato
                contato={{nome, email, fone}}
            /> */}

        </div>
    )
}