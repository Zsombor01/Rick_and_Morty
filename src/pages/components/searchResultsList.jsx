import { Link } from 'react-router-dom';
import { SearchResult } from './searchResult';
import '../styles/SearchBar.css';

export const SearchResultsList = ({ searchResults }) => {
	/* Displays the results of the search for the user */
	return (
		<div className='results-list'>
			{searchResults.map((result, id) => {
				return (
					<Link
						to={`/profile/${result.id.toString()}`}
						key={result.id}
						className='link'
					>
						<SearchResult result={result.name} key={id} />
					</Link>
				);
			})}
		</div>
	);
};
