import React from "react";
import "./App.css";
import {PrismaClient} from "@prisma/client"
import mozaiku from"./mosaic.png";
import MovieInfo from "./MovieInfo";
import AnimeInfo from "./AnimeInfo";
import Books from "./Books";


function App() {
    const prisma = new PrismaClient()
    async function main() {
        const book = await prisma.books.findFirst(2)
        return book
    }
    return (
        <div className="App">
            {/*<div className="container">*/}
            {/*    <div className="left">*/}
            {/*        <div className="top-left">*/}
            {/*            /!*<img src={mozaiku} alt="Image" className="image"/>*!/*/}
            {/*            <MovieInfo/>*/}
            {/*        </div>*/}
            {/*        <div className="bottom-left">*/}
            {/*            <button onClick="buttonClick(1)">映画</button>*/}
            {/*            <button onClick="buttonClick(2)">書籍</button>*/}
            {/*            <button onClick="buttonClick(3)">アニメ</button>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div class="right">*/}

            {/*    </div>*/}
            {/*</div>*/}

            {prisma}
        </div>
    );
}

export default App;