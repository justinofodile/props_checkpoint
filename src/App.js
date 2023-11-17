// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Player from './Player';
import { Container } from 'react-bootstrap';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
import PlayerList from './PlayerList';

function App() {
  return (
    <div>
      <Container className='mt-5 mb-5'>
        {/* Heading to our Player list */}
        <h1 className='text-center text-decoration-underline'>PLAYER LIST</h1>
        {/* Main call of our player list */}
        <PlayerList />
      </Container>
    </div>
  );
}

export default App;
