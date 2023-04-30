import './App.css';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';

const SPOTIFY_CLIENT_ID = "fad7a273a6ce474ca6a4f9c410f0d535";
const SPOTIFY_CLIENT_SECRET = "78bad78599c948b5b719a1789692bf1b"
const URL = "https://api.spotify.com/v1";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [authToken, setAuthToken] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [playlist, setPlaylist] = useState([]);

  const handleEnter = (event) => {
    if(event.key === "Enter") {
      search();
    }
  }

  const handleClear = () => {
    setPlaylist([]);
  }

  const handleChange = (event) => {
    setSearchInput(event.target.value);
  }

  const search = async () => {
    const endpoint = "/search";
    const params = {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + authToken
      }
    }
    await fetch(URL + endpoint + '?q=' + searchInput + '&type=track', params)
    .then(result => result.json())
    .then(data => {
      setSearchResults(data.tracks.items);
    })
  }

  useEffect(() => {
    const params = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials&client_id=' + SPOTIFY_CLIENT_ID + '&client_secret=' + SPOTIFY_CLIENT_SECRET
    }
    fetch('https://accounts.spotify.com/api/token', params)
    .then(result => result.json())
    .then(data => setAuthToken(data.access_token))
  }, [])

  return (
    <Container>
      <Row className='mt-4 text-center'>
        <Col>
          <h1 className='header'>Jammming! <i class="fa-solid fa-headphones"></i></h1>
          <p className='introduction'>Welcome to Jammming - the ultimate platform for creating custom Spotify playlists. Find and add your favorite tracks in just a few clicks and create the perfect playlist for any occasion. Search now and start exploring the world of music with us!</p>
        </Col>  
      </Row>
      <Row>
        <Col className='d-flex justify-content-center mt-3'>
          <SearchBar handleEnter={handleEnter} handleChange={handleChange} />
        </Col>
      </Row>
      <Row className='mx-3 row row-cols-2'>
        <Col className='col-12 col-md-6'>
          <SearchResults results={searchResults} playlist={playlist} setPlaylist={setPlaylist}/>
        </Col>
        <Col className='col-12 col-md-6'> 
          <Playlist handleClear={handleClear} results={searchResults} playlist={playlist} setPlaylist={setPlaylist} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
