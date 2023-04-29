import Tracklist from "./Tracklist";

function SearchResults() {
    return (
        <div className="my-card">
            <div className="my-card-head">
                <div className="head-content">
                    <i class="fa-brands fa-spotify fa-2xl spotify"></i>
                    <h2 className="my-card-heading">Search Results</h2>
                </div>
            </div>
            <Tracklist result={[{title: "Better", artist: "Khalid"}, {title: "Just The Way You Are", artist: "Khalid"}, {title: "Better", artist: "Khalid"}]} />
        </div>
    );
}

export default SearchResults;