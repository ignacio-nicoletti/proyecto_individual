const axios = require("axios");
const { Videogame } = require("../db");
const API_KEY = "5423f91210b541c7b628ea556649c0bb";

const ApiGame = async () => {
	try {

		let apiVideogames = [];

		for (let i = 1; i <= 5; i++) {
			let api = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${i}`);
			api.data.results.map((game) => {
				apiVideogames.push({
					id: game.id,

				});
			})
		}
		const detailGame = apiVideogames.map(async ({ id }) => {


			const detalle = await axios.get(
				`https://api.rawg.io/api/games/${id}?key=${API_KEY}`
			);
			const apiDetails = await detalle.data;

			return {
				idApi: apiDetails.id,
				name: apiDetails.name,
				description: apiDetails.description_raw,
				imageUrl: apiDetails.background_image,
				released: apiDetails.released,
				rating: apiDetails.rating,
				platforms: apiDetails.platforms.map((game) => game.platform.name),
				genres: apiDetails.genres.map((genre) => genre.name),
			};
		})

		Promise.all(detailGame)
			.then(async res => {

				const NewDB = await Videogame.bulkCreate(res)
				return NewDB
			})

		return apiVideogames;
	} catch (error) {
		console.log(error)
	}

}


module.exports = { ApiGame }