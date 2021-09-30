import React from "react";
import "./SearchMovies.css";

function MovieSearch(props) {
    return (
        <form className="form">
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
