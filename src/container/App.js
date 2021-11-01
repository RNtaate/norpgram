import './App.css';
import Signup from './Signup';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{minHeight: "100vh"}}
    >
      <div className="w-100" style={{maxWidth: "400px"}}>
        <Signup />
      </div>
    </Container>
  );
}

export default App;
