import { useState } from "react"

export default function Cadastro() {

    const [dono, setDono] = useState('')
    const [marca, setMarca] = useState('')
    const [modelo, setModelo] = useState('')
    const [ano_fab, setAnofab] = useState('')
    const [ano_mod, setAnoMod] = useState('')
    const [placa, setPlaca] = useState('')
    const [chassi, setChassi] = useState('')
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

        if (ano_fab === '') {
            alert('Informe o Ano de Fabricação')
            return
        }

        if (ano_mod === '') {
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

        let obj = { dono, marca, modelo, ano_fab, ano_mod, placa, chassi, renavam }

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

            <label className="form-label">Informe o Ano de Fabricação</label>
            <input
                className="form-control"
                type="text"
                placeholder="Informe o Ano de fabricação do veículo"
                onChange={txt => setAnofab(txt.target.value)}
            />

            <label className="form-label">Informe o Ano do Modelo</label>
            <input
                className="form-control"
                type="text"
                placeholder="Informe o Ano de Modelo do veículo"
                onChange={txt => setAnoMod(txt.target.value)}
            />

            <label className="form-label">Informe a Placa</label>
            <input
                className="form-control"
                type="text"
                placeholder="Informe a Placa do veículo"
                onChange={txt => setPlaca(txt.target.value)}
            />

            <label className="form-label">Informe o número Chassis</label>
            <input
                className="form-control"
                type="text"
                placeholder="Informe o Número de Chassis do Veículo"
                onChange={txt => setChassi(txt.target.value)}
            />

            <label className="form-label">Informe o número Do Renavam</label>
            <input
                className="form-control"
                type="text"
                placeholder="Informe o Número de Renavam do Veículo"
                onChange={txt => setRenavam(txt.target.value)}
            />

            <div className="mt-3 d-flex justify-content-between">
                <button onClick={salvar} className="btn btn-primary">Salvar</button>
                <button className="btn btn-danger">Cancelar</button>
            </div>            

        </div>
    )
}