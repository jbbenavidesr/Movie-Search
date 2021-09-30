import React from "react";
import "./App.css";

// Components
import MovieSearch from "../SearchMovies";

function App() {
    return (
        <div className="container">
            <h1>Movie Search</h1>
            <MovieSearch />
        </div>
    );
}

export default App;
