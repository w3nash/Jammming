import { useCallback } from 'react';
import SearchBar from '../components/SearchBar';
import Spotify from '../util/Spotify';

function SearchBarContainer({ setSearchResults, setSearchInput, searchInput }) {
	const goSearch = useCallback((searchInput) => {
		Spotify.search(searchInput).then(setSearchResults);
	}, []);

	const handleEnter = useCallback(
		(event) => {
			if (event.key === 'Enter') {
				goSearch(searchInput);
			}
		},
		[goSearch, searchInput]
	);

	const handleChange = useCallback((event) => {
		setSearchInput(event.target.value);
	}, []);

	return <SearchBar handleEnter={handleEnter} handleChange={handleChange} />;
}

export default SearchBarContainer;
