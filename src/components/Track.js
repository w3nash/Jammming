function Track(props) {

    function handleClick(item) {
        if(!props.p) {
            const newItem = {...item}; // create a copy of the clicked item
            props.setPlaylist([...props.playlist, newItem]); // add the copy to the list
        } else {
            const filtered = props.playlist.filter(i => i !== item);
            props.setPlaylist(filtered);
        }
    }

    return (
        <div className="track mb-2" onClick={() => handleClick(props.item)}>
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