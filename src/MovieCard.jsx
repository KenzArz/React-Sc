function MovieCard({ judul, poster, tahun, rating }) {
	return (
		<div className="movie-card">
			<img
				src={poster}
				alt={judul}
			/>
			<h3>{judul}</h3>
			<p>{tahun}</p>
			<span>⭐ {rating}</span>
		</div>
	);
}

export default MovieCard;
