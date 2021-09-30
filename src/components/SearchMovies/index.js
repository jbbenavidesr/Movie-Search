import React, { useState } from "react";
import "./SearchMovies.css";

// components
import MovieCard from "../MovieCard";

function MovieSearch(props) {
    // states- input query, movies
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);

    const handleSubmit = function (event) {
        event.preventDefault();

        const url = `https://api.themoviedb.org/3/search/movie?api_key=b69e29c842da7668bd25f26c30313183&language=en-US&query=${query}&page=1&include_adult=false`;

        fetch(url)
            .then(function (response) {
                if (response.ok) return response.json();
                throw response;
            })
            .then(function (data) {
                setMovies(data.results);
            })
            .catch(function (error) {
                console.error(error);
            });
    };

    const handleChange = function (event) {
        setQuery(event.target.value);
    };

    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="query" className="label">
                    Movie Name
                </label>
                <input
                    type="text"
                    className="input"
                    name="query"
                    placeholder="i.e. Jurassic Park"
                    value={query}
                    onChange={handleChange}
                />
                <button className="button">Search</button>
            </form>
            <ul role="list" className="card-list">
                {movies
                    .filter((movie) => movie.poster_path)
                    .map(function (movie) {
                        return (
                            <li key={movie.id}>
                                <MovieCard movie={movie} />
                            </li>
                        );
                    })}
            </ul>
        </>
    );
}

export default MovieSearch;
