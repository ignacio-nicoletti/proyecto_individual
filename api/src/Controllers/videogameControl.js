const axios = require("axios");
const { Videogame, Genre } = require("../db");
const API_KEY = "568e056812744f16ad009be325069566";

const LLamarJuegos = async () => {
	let juegos = [];

	for (let i = 1; i <= 5; i++) {
		let api = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${i}`);
		api.data.results.map((game) => {
			juegos.push({
				id: game.id,
				name: game.name,
				releaseDate: game.released,
				rating: game.rating,
				platforms: toString(game.platforms.map((game) => game.platform.name)),
				imageUrl: game.background_image,
				genres: toString(game.genres.map((genre) => genre.name)),
			});
		})

	}

	return juegos;
}

const LLamarJuegosBD = async () => {

	const gamesDb = await Videogame.findAll({
		include: {
			model: Genre,
			attributes: ["name"],
			through: {
				attributes: [],
			},
		},
	});
	return gamesDb;
}

const GameTotal = async () => {

	const apigame = await LLamarJuegos();
	const apiDB = await LLamarJuegosBD()

	const Base = apiDB.map((el) => {
		return {
			id: el.id,
			name: el.name,
			releaseDate: el.releaseDate,
			rating: el.rating,
			platforms: el.platforms,
			imageUrl: el.imageUrl,
			genres: el.genres.map((genre) => genre.name),
			createdInDb: true,
		};
	});


	const union = apigame.concat(Base);
	return (union);

}



const toString = (array) => {
	let st = "";
	array.map((e) => {
	  st.length === 0 ? (st += e) : (st += ", " + e);
	});
	return st;
  }; //funcion que agrega comas entre elementos
  




const ApiDetail = async (id) => {
	const api = await axios.get(
		`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);

	const apiDetail = api.data

	const gamebyId = {
		id: apiDetail.id,
		name: apiDetail.name,
		description: apiDetail.description_raw,
		imageUrl: apiDetail.background_image,
		releaseDate: apiDetail.released,
		rating: apiDetail.rating,
		platforms: toString(apiDetail.platforms.map((p) => p.platform.name)),
		genres: toString(apiDetail.genres.map((g) => g.name)),
	}

	return [gamebyId];
};

const DbDetail = async (id) => {
	const gamesDbDetails = await Videogame.findByPk(id)
		
	return gamesDbDetails;
}

// const TotalDetail = async (id) => {
// 	const apigameDetail = await ApiDetail(id);
// 	const apiDBDetail = await DbDetail(id)
// 	const InfoDetail = await apiDBDetail.map((el) => {
// 		return {
// 			id: el.id,
// 			name: el.name,
// 			releaseDate: el.releaseDate,
// 			rating: el.rating,
// 			platforms: el.platforms,
// 			imageUrl: el.imageUrl,
// 			genres: toString(el.genres.map((genre) => genre.name)),
// 			createdInDb: true,
// 		};
// 	});
// 	const unionDetail = apigameDetail.concat(InfoDetail);
// 	return (unionDetail);
// }


module.exports = { GameTotal, ApiDetail,DbDetail,LLamarJuegos }

//
//
//
//
//
//-----------Modo Pasar Api por la base de datos-------------- 
//
//
//
//
//



// const ApiGame = async () => {
// 	try {

// 		let apiVideogames = [];

// 		for (let i = 1; i <= 5; i++) {
// 			let api = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${i}`);
// 			api.data.results.map((game) => {
// 				apiVideogames.push({
// 					id: game.id,

// 				});
// 			})
// 		}
// 		const detailGame = apiVideogames.map(async ({ id }) => {


// 			const detalle = await axios.get(
// 				`https://api.rawg.io/api/games/${id}?key=${API_KEY}`
// 			);
// 			const apiDetails = await detalle.data;

// 			return {
// 				idApi: apiDetails.id,
// 				name: apiDetails.name,
// 				description: apiDetails.description_raw,
// 				imageUrl: apiDetails.background_image,
// 				released: apiDetails.released,
// 				rating: apiDetails.rating,
// 				platforms: apiDetails.platforms.map((game) => game.platform.name),
// 				genres: apiDetails.genres.map((genre) => genre.name),
// 			};
// 		})

// 		Promise.all(detailGame)
// 			.then(async res => {

// 				const NewDB = await Videogame.bulkCreate(res)---> lo paso a la base
// 				return NewDB
// 			})

// 		return apiVideogames;

// 	} catch (error) {
// 		console.log(error)
// 	}

// }



//module.exports = { ApiGame }--Modo pasarxBD
