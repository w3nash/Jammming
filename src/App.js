import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchResults from './containers/SearchResultsContainer';
import SearchBarContainer from './containers/SearchBarContainer';
import PlaylistContainer from './containers/PlaylistContainer';
import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';

function App() {
	const [searchInput, setSearchInput] = useState('');
	const [searchResults, setSearchResults] = useState([]);
	const [playlist, setPlaylist] = useState([]);
	const [playlistName, setPlaylistName] = useState('New Playlist');

	return (
		<Container className="overflow-auto">
			<Row className="mt-4 text-center">
				<Col>
					<h1 className="header">
						Jammming! <i className="fa-solid fa-headphones"></i>
					</h1>
					<p className="introduction">
						Welcome to Jammming - the ultimate platform for creating custom
						Spotify playlists. Find and add your favorite tracks in just a few
						clicks and create the perfect playlist for any occasion. Search now
						and start exploring the world of music with us!
					</p>
				</Col>
			</Row>
			<Row>
				<Col className="d-flex justify-content-center mt-3">
					<SearchBarContainer
						setSearchResults={setSearchResults}
						setSearchInput={setSearchInput}
						searchInput={searchInput}
					/>
				</Col>
			</Row>
			<Row className="mx-3 row row-cols-2">
				<Col className="col-12 col-md-6">
					<SearchResults
						results={searchResults}
						playlist={playlist}
						setPlaylist={setPlaylist}
					/>
				</Col>
				<Col className="col-12 col-md-6">
					<PlaylistContainer
						results={searchResults}
						playlist={playlist}
						setPlaylist={setPlaylist}
						playlistName={playlistName}
						setPlaylistName={setPlaylistName}
					/>
				</Col>
			</Row>
		</Container>
	);
}

export default App;
