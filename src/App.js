import { Link, Outlet } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div className="App">
       <div className='text-center'>
        <h1>Ordens de Serviço</h1>
        <hr/>
        <nav>
          <Link to='/carros/cadastrar'>Cadastro</Link> &nbsp;
          <Link to='/carros/consultar'>Consulta</Link>
        </nav>
        <hr/>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default App;
