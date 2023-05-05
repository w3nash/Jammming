function Track(props) {
	return (
		<div className="track mb-2" onClick={() => props.handleClick(props.item)}>
			<i className="fa-solid fa-plus me-3"></i>
			<img alt={props.name} src={props.src} className="album-cover" />
			<div className="song">
				<p className="title">{props.name}</p>
				<p className="artist">{props.artist}</p>
			</div>
		</div>
	);
}

export default Track;
