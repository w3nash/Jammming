import Track from "./Track";

function Playlist() {
    return (
        <div className="my-card">
            <div className="my-card-head">
                <p className="my-card-heading">Playlist</p>
            </div>
            <Track title="Better" artist="Khalid" />
        </div>
    );
}

export default Playlist;