import React, { useEffect, useState } from "react";
import axios from "axios";

const RandomMovies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const apiKey = "9360a261519daf0723b034e5a698e17b";

        const fetchRandomMovies = async () => {
            const randomMovies = [];

            for (let i = 0; i < 10; i++) {
                const randomPage = Math.floor(Math.random() * 500) + 1; // ページをランダムに選択
                const response = await axios.get(
                    `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&page=${randomPage}`
                );
                const randomMovieIndex = Math.floor(
                    Math.random() * response.data.results.length
                );
                randomMovies.push(response.data.results[randomMovieIndex]);
            }

            setMovies(randomMovies);
        };

        fetchRandomMovies();
    }, []);

    return (
        <div>
            <h2>ランダムな映画トップ10</h2>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>
                        <h3>{movie.title}</h3>
                        {movie.poster_path && (
                            <img
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                            />
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RandomMovies;