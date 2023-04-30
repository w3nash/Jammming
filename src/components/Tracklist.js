import Track from "./Track";

function Tracklist(props) {
    const list = props.results.map(item => {
        return <Track key={item.uri} p={props.p} item={item} playlist={props.playlist} setPlaylist={props.setPlaylist} name={item.name} artist={item.artists[0].name} src={item.album.images[0].url}/>;
    })
    return (
        <>
            {list}
        </>
    );
}

export default Tracklist;