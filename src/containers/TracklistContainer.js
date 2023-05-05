import Tracklist from '../components/Tracklist';
import TrackContainer from '../containers/TrackContainer';

function TracklistContainer(props) {
	const list = props.results.map((item) => {
		return (
			<TrackContainer
				key={item.uri}
				p={props.p}
				item={item}
				playlist={props.playlist}
				setPlaylist={props.setPlaylist}
				name={item.name}
				artist={item.artist}
				src={item.src}
			/>
		);
	});
	return <Tracklist list={list} />;
}

export default TracklistContainer;
