import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Titulo from './components/Titulo';
import Formulario from './components/Formulario';

function App() {
  return (
    <>
      <Container>
        <Titulo></Titulo>
        <Formulario></Formulario>
      </Container>

    </>
  );
}

export default App;
