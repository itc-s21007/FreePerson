import React from "react";
import "./App.css";
import MovieInfo from "./MovieInfo";
import BooksInfo from "./BooksInfo";

function App() {
    return (
        <div className="App">
            <h1>映画のおすすめ</h1>
            <MovieInfo />
            <h1>本のオススメ</h1>
            <BooksInfo />
        </div>
    );
}

export default App;