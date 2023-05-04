import Track from "../components/Track";

function TrackContainer(props) {

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
        <Track
            handleClick={handleClick}
            item={props.item}
            name={props.name}
            src={props.src}
            artist={props.artist}
        />
    );
}

export default TrackContainer;