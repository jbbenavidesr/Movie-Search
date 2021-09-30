import React from "react";
import "./SearchMovies.css";

function MovieSearch(props) {
    const handleSubmit = function (e) {
        e.preventDefault();

        let query = "jurassic park";

        const url = `https://api.themoviedb.org/3/search/movie?api_key=b69e29c842da7668bd25f26c30313183&language=en-US&query=${query}&page=1&include_adult=false`;

        fetch(url)
            .then(function (response) {
                if (response.ok) return response.json();
                throw response;
            })
            .then(function (data) {
                console.log(data);
            })
            .catch(function (error) {
                console.error(error);
            });
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="query" className="label">
                Movie Name
            </label>
            <input
                type="text"
                className="input"
                name="query"
                placeholder="i.e. Jurassic Park"
            />
            <button className="button">Search</button>
        </form>
    );
}

export default MovieSearch;
