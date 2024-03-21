/* This component is responsible for fetching the individual character's data */
export const characterDetailsLoader = async ({ params }) => {
	const { id } = params;
	try {
		const res = await fetch('https://rickandmortyapi.com/api/character/' + id);
		if (!res.ok) {
			throw new Error('Network response was not ok');
		}
		return res.json();
	} catch (error) {
		console.error('Error fetching data: ', error);
	}
};
