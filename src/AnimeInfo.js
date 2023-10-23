import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RandomAnime = () => {
    const [animeData, setAnimeData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiKey = 'FgEXO0CAaEIdThd8TdcPyIyOWHTySfR0ZU1oZcVkkwk'; // Annict Developers APIのAPIキーを追加
                const response = await axios.get('https://api.annict.com/v1/works', {
                    params: {
                        access_token: apiKey,
                    },
                });

                // APIから取得したデータから10個のランダムなアニメを選択
                const randomAnimeData = [];
                const totalAnimeCount = response.data.length;
                while (randomAnimeData.length < 10) {
                    const randomIndex = Math.floor(Math.random() * totalAnimeCount);
                    if (!randomAnimeData.some(anime => anime.id === response.data[randomIndex].id)) {
                        randomAnimeData.push(response.data[randomIndex]);
                    }
                }
                setAnimeData(randomAnimeData);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="App">
            <h1>Random Anime Data</h1>
            <ul>
                {animeData.map(anime => (
                    <li key={anime.id}>
                        <h2>Title: {anime.title}</h2>
                        <p>Author: {anime.author}</p>
                        <img src={anime.images.poster} alt={anime.title} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default RandomAnime;
