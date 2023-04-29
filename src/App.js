import './App.css';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container>
      <Row>
        <Col className='d-flex justify-content-center mt-3'>
          <SearchBar />
        </Col>
      </Row>
      <p>Search the Spotify Database!</p>
      <Row className='mx-3 row row-cols-2'>
        <Col className='col-12 col-md-6'>
          <SearchResults/>
        </Col>
        <Col className='col-12 col-md-6'> 
          <Playlist />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
