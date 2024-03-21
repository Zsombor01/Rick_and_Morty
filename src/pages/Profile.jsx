import { useLoaderData, Link } from 'react-router-dom';
import './styles/Profile.css';

export const Profile = () => {
	/* This component receives the data from characterData and displays it for the user. */
	const character = useLoaderData();
	return (
		<div className='profile-container'>
			<div className='title-container'>
				<Link to='/'>
					<img
						src='https://pngimg.com/d/rick_morty_PNG30.png'
						alt='rick_and_morty'
						className='title-img'
					/>
				</Link>
			</div>
			<div className='character'>
				<img
					src={character.image}
					alt={character.name}
					className='character_image'
				/>
				<div className='character-details'>
					<h1 className='character-name'>{character.name}</h1>
					<p className='character-species'>{`Species: ${character.species}`}</p>
					<p className='character-gender'>{`Gender: ${character.gender}`}</p>
					<p className='character-status'>{`Status: ${character.status}`}</p>
					<p className='character-origin'>{`Origin: ${character.origin.name}`}</p>
				</div>
			</div>
			<Link to='/'>
				<button className='home-btn'>
					<span>Home</span>
				</button>
			</Link>
		</div>
	);
};
