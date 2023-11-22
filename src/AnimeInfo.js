import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RandomAnime = () => {
    const [animeData, setAnimeData] = useState([]);

    useEffect(() => {
        const animeUrl = `https://api.annict.com/v1/works?access_token=(${access_token})?title`
        const access_token = 'Y5Wuo6xnk25Kq6pqvI9z4uLtx4p2zA-ZairvX1zdIFg';

        fetch(animeUrl)
            .then((response) => response.json())
            .then((data) => {
                const animeData = data.works || []
                setAnimeData(animeData)
            })
            .catch((e) => {
                console.error('アニメデータの取得に失敗しました',e)
            })
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
