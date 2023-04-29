import Tracklist from "./Tracklist";

function Playlist() {
    return (
        <div className="my-card">
            <div className="my-card-head">
                <div className="head-content">
                    <i class="fa-solid fa-table-list fa-2xl playlist"></i>
                    <h2 className="my-card-heading">Playlist</h2>
                </div>
            </div>
            <Tracklist result={[{title: "Better", artist: "Khalid"}, {title: "Just The Way You Are", artist: "Khalid"}, {title: "Better", artist: "Khalid"}]} />
        </div>
    );
}

export default Playlist;