import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { SearchBar } from './components/searchBar';
import { SearchResultsList } from './components/searchResultsList';
import './styles/Home.css';

export const Home = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [characters, setCharacters] = useState([]);
	const [searchResults, setSearchResults] = useState([]);

	useEffect(() => {
		/* fetching data with pagination */
		const fetchData = async () => {
			try {
				const response = await fetch(
					`https://rickandmortyapi.com/api/character/?page=${currentPage}`,
					{
						method: 'GET',
						headers: {
							'Content-Type': 'application/json',
							Accept: 'application/json',
						},
					}
				);

				if (!response.ok) {
					console.log('There were issues with fetching');
					return;
				}

				const data = await response.json();
				setCharacters(data.results);
			} catch (error) {
				console.error('Error fetching data: ', error);
			}
		};

		fetchData();
	}, [currentPage]);

	/* Increases the number of the page*/
	const handleNextPage = () => {
		setCurrentPage((prevPage) => prevPage + 1);
	};

	/* Decreases the number of the page*/
	const handlePrevPage = () => {
		if (currentPage > 1) {
			setCurrentPage((prevPage) => prevPage - 1);
		}
	};

	return (
		<div className='Home'>
			<div className='title-container'>
				<img
					src='https://pngimg.com/d/rick_morty_PNG30.png'
					alt='rick_and_morty'
					className='title-img'
				/>
			</div>
			<div className='searchBar'>
				<SearchBar
					setSearchResults={setSearchResults}
					currentPage={currentPage}
				/>
				{searchResults && searchResults.length > 0 && (
					<SearchResultsList searchResults={searchResults} />
				)}
			</div>
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Picture</th>
						<th>Name</th>
						<th>Species</th>
						<th>Status</th>
					</tr>
				</thead>
				<tbody>
					{/* Mapping through the fetched data and displaying it in a table. */}
					{characters.map((character) => {
						return (
							<tr key={character.id}>
								<td>{character.id}</td>
								<td>
									<Link
										to={`/profile/${character.id.toString()}`}
										key={character.id}
										className='link'
									>
										<img
											src={character.image}
											alt={character.name}
											className='character-image'
										/>
									</Link>
								</td>
								<td>
									<Link
										to={`/profile/${character.id.toString()}`}
										key={character.id}
										className='link'
									>
										{character.name}
									</Link>
								</td>
								<td>{character.species}</td>
								<td>{character.status}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
			{/* Buttons for pagination */}
			<div className='pagination-btns'>
				<button onClick={handlePrevPage} className='prevPage-btn'>
					<span>Previous Page</span>
				</button>
				<button onClick={handleNextPage} className='nextPage-btn'>
					<span>Next Page</span>
				</button>
			</div>
		</div>
	);
};
