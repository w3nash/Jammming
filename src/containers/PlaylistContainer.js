import { useState, useCallback } from 'react';
import Playlist from '../components/Playlist';
import Spotify from '../util/Spotify';

function PlaylistContainer(props) {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleChange = useCallback(
		(event) => {
			props.setPlaylistName(event.target.value);
		},
		[props.setPlaylistName]
	);

	const CreatePlaylist = useCallback(() => {
		const trackUris = props.playlist.map((track) => track.uri);
		Spotify.savePlaylist(props.playlistName, trackUris).then(() => {
			props.setPlaylistName('New Playlist');
			props.setPlaylist([]);
		});
		setShow(true);
	}, [props.playlistName, props.playlist]);

	return (
		<Playlist
			handleClose={handleClose}
			show={show}
			playlist={props.playlist}
			setPlaylist={props.setPlaylist}
			handleChange={handleChange}
			CreatePlaylist={CreatePlaylist}
		/>
	);
}

export default PlaylistContainer;
