import Track from "./Track";

function Tracklist(props) {
    const list = props.result.map(item => {
        return <Track title={item.title} artist={item.artist} />;
    })
    return (
        <>
            {list}
        </>
    );
}

export default Tracklist;