import React, { useEffect, useState } from "react";
import axios from "axios";

const RandomBookes = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const apiKey = 'AIzaSyCZgHh8SUwWWdIfpzWT8518J2a46jNaE4Y';

        const randomKeyword = generateRandomKeyword();

        const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${randomKeyword}&maxResults=10&key=${apiKey}`;

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                // データから本の情報を取り出します
                const booksData = data.items || [];
                setBooks(booksData);
            })
            .catch((error) => {
                console.error('データの取得に失敗しました', error);
            });
    }, []);

    const generateRandomKeyword = () => {
        const keywords = ['programming', 'fiction', 'history', 'science', 'technology'];
        const randomIndex = Math.floor(Math.random() * keywords.length);
        return keywords[randomIndex];
    };

    return (
        <div className="App">
            <h1>ランダムな本のリスト</h1>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>
                        <h2>{book.volumeInfo.title}</h2>
                        <p>{book.volumeInfo.authors}</p>
                        <p>{book.volumeInfo.description}</p>
                        {book.volumeInfo.imageLinks && (
                            <img src={book.volumeInfo.imageLinks.thumbnail} alt={`${book.volumeInfo.title}の画像`} />
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RandomBookes;
