const axios = require("axios");
const PrismaClient = require('@prisma/client').PrismaClient
const prisma = new PrismaClient()

const apiKey = 'AIzaSyCZgHh8SUwWWdIfpzWT8518J2a46jNaE4Y';

// ランダムなキーワードリスト
const mangaKeywords = ['manga', 'comics', 'graphic novel', 'comic book'];
const novelKeywords = ['novel', 'fiction', 'literary fiction', 'classic novel'];

// 漫画のキーワードをランダムに選択
const randomMangaKeyword = mangaKeywords[Math.floor(Math.random() * mangaKeywords.length)];

// 小説のキーワードをランダムに選択
const randomNovelKeyword = novelKeywords[Math.floor(Math.random() * novelKeywords.length)];

// 漫画と小説のそれぞれのGoogle Books APIのエンドポイントURLを構築
const mangaApiUrl = `https://www.googleapis.com/books/v1/volumes?q=${randomMangaKeyword}&maxResults=40&key=${apiKey}&langRestrict=ja`;
const novelApiUrl = `https://www.googleapis.com/books/v1/volumes?q=${randomNovelKeyword}&maxResults=40&key=${apiKey}&langRestrict=ja`;

// 漫画データを取得
// fetch(mangaApiUrl)
//     .then((response) => response.json())
//     .then(async (data) => {
//         const mangaData = data.items || [];
//         console.log(mangaData);
//         await prisma.books.createMany(
//             {
//                 data: mangaData.map((manga) => (
//                     {
//                         title: manga.volumeInfo.title,
//                         author: manga.volumeInfo.authors ? manga.volumeInfo.authors.join() : null,
//                         poster: manga.volumeInfo.imageLinks ? manga.volumeInfo.imageLinks.thumbnail : null
//                     }
//                 ))
//             }
//         )
//     })
//     .catch((error) => {
//         console.error('漫画データの取得に失敗しました', error);
//     });

// fetch(novelApiUrl)
//     .then((response) => response.json())
//     .then(async (data) => {
//         const novelData = data.items || [];
//         console.log(novelData);
//         await prisma.books.createMany(
//             {
//                 data : novelData.map((novel) =>(
//                     {
//                         title: novel.volumeInfo.title,
//                         author: novel.volumeInfo.authors ? novel.volumeInfo.authors.join() : null,
//                         poster: novel.volumeInfo.imageLinks ? novel.volumeInfo.imageLinks.thumbnail : null
//                     }
//                 ))
//             }
//         )
//     })
//
//
//     .catch((error) => {
//         console.error('小説データの取得に失敗しました', error);
//     });

const ApiKey = "9360a261519daf0723b034e5a698e17b"
const randomPage = Math.floor(Math.random() * 500) + 1; // ページをランダムに選択
const movieUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${ApiKey}&page=4&language=ja-JP`

fetch(movieUrl)
    .then((response) => response.json())
    .then(async (data) => {
        const movieData = data.results || [];
        console.log(movieData)
        await prisma.movie.createMany(
            {
            data : movieData.map((movie) => (
                {
                    title : movie.title,
                    author : movie.overview,
                    poster : `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                }
            ))
            }
        )
    })

.catch((error) => {
    console.error('データの取得に失敗しました', error)
})