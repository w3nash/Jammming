import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchResults from './containers/SearchResultsContainer';
import SearchBarContainer from './containers/SearchBarContainer';
import PlaylistContainer from './containers/PlaylistContainer';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { getToken, getUserID, login } from './util/Spotify';

const SPOTIFY_CLIENT_ID = "fad7a273a6ce474ca6a4f9c410f0d535";
const SPOTIFY_CLIENT_SECRET = "78bad78599c948b5b719a1789692bf1b"

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [authToken, setAuthToken] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [userID, setUserID] = useState("");
    
  useEffect(() => {
    getToken(SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, setAuthToken, authToken, setUserID);
  }, [])

  function handleClick() {
    login(SPOTIFY_CLIENT_ID);
  }

  return (
    <Container className='overflow-auto'>
      <Row className='mt-4 text-center'>
        <Col>
          <h1 className='header'>Jammming! <i className="fa-solid fa-headphones"></i></h1>
          <p className='introduction'>Welcome to Jammming - the ultimate platform for creating custom Spotify playlists. Find and add your favorite tracks in just a few clicks and create the perfect playlist for any occasion. Search now and start exploring the world of music with us!</p>
        </Col> 
      </Row>
      <Row>
        <Col className='d-flex justify-content-center mt-3'>
          <SearchBarContainer
            authToken={authToken}
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            setSearchResults={setSearchResults}
          />
        </Col>
      </Row>
      <Row>
        <Col className='mt-2 text-center login-container'>
          {userID === ""
          ? <Button
            className="my-button"
            size="md"
            onClick={handleClick}
          >
            Log in Spotify <i className="fa-brands fa-spotify fa-md"></i>
          </Button>
          : <h6>Hello, {userID}. 👋</h6>
          }
        </Col>
      </Row>
      <Row className='mx-3 row row-cols-2'>
        <Col className='col-12 col-md-6'>
          <SearchResults
            results={searchResults}
            playlist={playlist}
            setPlaylist={setPlaylist} />
        </Col>
        <Col className='col-12 col-md-6'> 
          <PlaylistContainer
            SPOTIFY_CLIENT_ID={SPOTIFY_CLIENT_ID}
            results={searchResults}
            playlist={playlist}
            setPlaylist={setPlaylist}
            userID={userID}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
