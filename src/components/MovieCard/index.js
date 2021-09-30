import React from "react";

function MovieCard(props) {
    let movie = props.movie;
    return (
        <article className="card">
            <div className="card__img">
                <img
                    src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                    alt={movie.title + " poster"}
                />
            </div>
            <div className="card__content">
                <h3 className="card__title">{movie.title}</h3>
                <p>
                    <small>RELEASE DATE: {movie.release_date}</small>
                </p>
                <p>
                    <small>RATING: {movie.vote_average}</small>
                </p>
                <p className="card__desc">{movie.overview}</p>
            </div>
        </article>
    );
}

export default MovieCard;
