import React, { useEffect, useState } from 'react';

const Books = () => {
    const [mangaList, setMangaList] = useState([]);
    const [novelList, setNovelList] = useState([]);

    useEffect(() => {
        // Google Books APIのAPIキーを設定します
        const apiKey = 'AIzaSyCZgHh8SUwWWdIfpzWT8518J2a46jNaE4Y';

        // ランダムなキーワードリスト
        const mangaKeywords = ['manga', 'comics', 'graphic novel', 'comic book'];
        const novelKeywords = ['novel', 'fiction', 'literary fiction', 'classic novel'];

        // 漫画のキーワードをランダムに選択
        const randomMangaKeyword = mangaKeywords[Math.floor(Math.random() * mangaKeywords.length)];

        // 小説のキーワードをランダムに選択
        const randomNovelKeyword = novelKeywords[Math.floor(Math.random() * novelKeywords.length)];

        // 漫画と小説のそれぞれのGoogle Books APIのエンドポイントURLを構築
        const mangaApiUrl = `https://www.googleapis.com/books/v1/volumes?q=${randomMangaKeyword}&maxResults=10&key=${apiKey}`;
        const novelApiUrl = `https://www.googleapis.com/books/v1/volumes?q=${randomNovelKeyword}&maxResults=10&key=${apiKey}`;

        // 漫画データを取得
        fetch(mangaApiUrl)
            .then((response) => response.json())
            .then((data) => {
                const mangaData = data.items || [];
                setMangaList(mangaData);
            })
            .catch((error) => {
                console.error('漫画データの取得に失敗しました', error);
            });

        // 小説データを取得
        fetch(novelApiUrl)
            .then((response) => response.json())
            .then((data) => {
                const novelData = data.items || [];
                setNovelList(novelData);
            })
            .catch((error) => {
                console.error('小説データの取得に失敗しました', error);
            });
    }, []);

    return (
        <div className="App">
            <div className="manga-list">
                <h1>ランダムな漫画のリスト</h1>
                <ul>
                    {mangaList.map((manga) => (
                        <li key={manga.id}>
                            <h2>{manga.volumeInfo.title}</h2>
                            <p>{manga.volumeInfo.authors}</p>
                            <p>{manga.volumeInfo.description}</p>
                            {manga.volumeInfo.imageLinks && (
                                <img src={manga.volumeInfo.imageLinks.thumbnail} alt={`${manga.volumeInfo.title}の画像`} />
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="novel-list">
                <h1>ランダムな小説のリスト</h1>
                <ul>
                    {novelList.map((novel) => (
                        <li key={novel.id}>
                            <h2>{novel.volumeInfo.title}</h2>
                            <p>{novel.volumeInfo.authors}</p>
                            <p>{novel.volumeInfo.description}</p>
                            {novel.volumeInfo.imageLinks && (
                                <img src={novel.volumeInfo.imageLinks.thumbnail} alt={`${novel.volumeInfo.title}の画像`} />
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Books;
