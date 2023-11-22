const express = require('express')
const cors = require('cors')
const app = express()
const PrismaClient = require('@prisma/client').PrismaClient
const prisma = new PrismaClient()

const corsOptions = {
    origin : `http://localhost:3000`,
    optionsSuccessStatus: 200
}

// 書籍情報を取ってくる処理
app.get('/book',cors(corsOptions), async function (req, res){
    const books = await prisma.books.findMany()
    const data = {
        message : 'hello',
        data:books.map((book) => (
            book
        ))
    }
    res.json(data);
})

// 映画情報を取ってくる処理
app.get('/movie',cors(corsOptions), async function(req, res){
    const movies = await prisma.movie.findMany()
    const data = {
        data:movies.map((movie) => (
            movie
        ))
    }
    res.json(data)
})
app.listen(8080, () => console.log("API起動しました"))