import Tracklist from "./Tracklist";


function SearchResults() {
    return (
        <div className="my-card">
            <div className="my-card-head">
                <p className="my-card-heading">Search Results</p>
            </div>
            <Tracklist result={[{title: "Better", artist: "Khalid"}, {title: "Just The Way You Are", artist: "Khalid"}, {title: "Better", artist: "Khalid"}]} />
        </div>
    );
}

export default SearchResults;