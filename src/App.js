import './App.css';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';

function App() {
  return (
    <>
      <h1>Hello World!</h1>
      <p>My first React App</p>
      <SearchBar />
      <SearchResults />
      <Playlist />
    </>
  );
}

export default App;
