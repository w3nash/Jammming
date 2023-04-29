import './App.css';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const SPOTIFY_CLIENT_ID = process.env.CLIENT_ID;
const SPOTIFY_CLIENT_SECRET = process.env.CLIENT_SECRET;
const URL = "https://api.spotify.com/v1/";

function App() {
  
  return (
    <Container>
      <Row>
        <Col className='d-flex justify-content-center mt-3'>
          <SearchBar />
        </Col>
      </Row>
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
