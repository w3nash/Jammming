import TracklistContainer from './TracklistContainer';

function SearchResultsContainer(props) {
	return (
		<div className="my-card">
			<div className="my-card-head">
				<div className="head-content">
					<i className="fa-brands fa-spotify fa-2xl spotify"></i>
					<h2 className="my-card-heading">Search Results</h2>
				</div>
			</div>
			<TracklistContainer
				playlist={props.playlist}
				setPlaylist={props.setPlaylist}
				results={props.results}
			/>
		</div>
	);
}

export default SearchResultsContainer;
