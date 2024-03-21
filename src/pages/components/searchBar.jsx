import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import '../styles/SearchBar.css';


export const SearchBar = ({ setSearchResults, currentPage }) => {
	const [searchInput, setSearchInput] = useState('');
	/* The search bar component fetches the data, filters it to fit for the given search than passes it to the searchResultsList component which will display the search results for the user. */
	const fetchData = (value) => {
		value = value.toLowerCase();
		fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)
			.then((response) => response.json())
			.then((data) => {
				const results = data.results.filter((user) => {
					return value && user.name && user.name.toLowerCase().includes(value);
				});
				setSearchResults(results);
			});
	};

	const handleSearchChange = (value) => {
		setSearchInput(value);
		fetchData(value);
	};

	return (
		<div className='input-wrapper'>
			<FaSearch id='search-icon' />
			<input
				placeholder='Search for a character...'
				value={searchInput}
				onChange={(e) => handleSearchChange(e.target.value)}
			/>
		</div>
	);
};
