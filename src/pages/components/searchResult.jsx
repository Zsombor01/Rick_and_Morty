import '../styles/SearchBar.css';

export const SearchResult = ({ result }) => {
	/* Writes out the individual results inside the searchResultsList */
	return <div className='search-result'>{result}</div>;
};
