import SearchBar from "../components/SearchBar";
import { search } from "../util/Spotify";

function SearchBarContainer({ authToken, searchInput, setSearchInput, setSearchResults }) {

    const handleEnter = async (event) => {
        if (event.key === "Enter") {
            search(authToken, searchInput, setSearchResults);
        }
    }

    const handleChange = (event) => {
        setSearchInput(event.target.value);
    }

    return (
        <SearchBar
            handleEnter={handleEnter}
            handleChange={handleChange}
        />
    );
}

export default SearchBarContainer;