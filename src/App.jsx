import "./App.css";
import MovieCard from "./MovieCard";

function App() {
	const daftarFilm = [
		{
			id: 1,
			judul: "Inception",
			poster: "/poster/inception.png",
			tahun: 2010,
			rating: 8.6,
		},
		{
			id: 2,
			judul: "Interstellar",
			poster: "/poster/interstellar.png",
			tahun: 2014,
			rating: 8.6,
		},
		{
			id: 3,
			judul: "The Odyssey",
			poster: "/poster/odyssey.png",
			tahun: 20206,
			rating: 7.1,
		},
		{
			id: 3,
			judul: "The Odyssey",
			poster: "/poster/odyssey.png",
			tahun: 20206,
			rating: 7.1,
		},
		{
			id: 3,
			judul: "The Odyssey",
			poster: "/poster/odyssey.png",
			tahun: 20206,
			rating: 7.1,
		},
		{
			id: 3,
			judul: "The Odyssey",
			poster: "/poster/odyssey.png",
			tahun: 20206,
			rating: 7.1,
		},
		{
			id: 3,
			judul: "The Odyssey",
			poster: "/poster/odyssey.png",
			tahun: 20206,
			rating: 7.1,
		},
		{
			id: 3,
			judul: "The Odyssey",
			poster: "/poster/odyssey.png",
			tahun: 20206,
			rating: 7.1,
		},
		{
			id: 3,
			judul: "The Odyssey",
			poster: "/poster/odyssey.png",
			tahun: 20206,
			rating: 7.1,
		},
		{
			id: 3,
			judul: "The Odyssey",
			poster: "/poster/odyssey.png",
			tahun: 20206,
			rating: 7.1,
		},
		{
			id: 3,
			judul: "The Odyssey",
			poster: "/poster/odyssey.png",
			tahun: 20206,
			rating: 7.1,
		},
		{
			id: 3,
			judul: "The Odyssey",
			poster: "/poster/odyssey.png",
			tahun: 20206,
			rating: 7.1,
		},
		{
			id: 3,
			judul: "The Odyssey",
			poster: "/poster/odyssey.png",
			tahun: 20206,
			rating: 7.1,
		},
		{
			id: 3,
			judul: "The Odyssey",
			poster: "/poster/odyssey.png",
			tahun: 20206,
			rating: 7.1,
		},
		{
			id: 3,
			judul: "The Odyssey",
			poster: "/poster/odyssey.png",
			tahun: 20206,
			rating: 7.1,
		},
	];

	return (
		<div className="app">
			<h1>DAFTAR FILM FAVORITE GWEJH</h1>

			<div className="movie-list">
				{daftarFilm.map((film) => (
					<MovieCard
						judul={film.judul}
						poster={film.poster}
						tahun={film.tahun}
						rating={film.rating}
					/>
				))}
			</div>
		</div>
	);
}

export default App;
