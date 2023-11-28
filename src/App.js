import React, {useState} from "react";
import "./App.css";
import Booksdb from "./acquisition/Booksdb";
import Model from "./Model";



function App() {


    return (
        <div className="App">
            <div className="container">
                <div className="left">
                    <div className="top-left">
                        <div className="center">
                            <Model/>
                        </div>
                    </div>
                    <div className="button-left">
                        <h1 className="lettercolor">暇人 ”暇を楽しみに変える”</h1>
                        <button className="button" onClick="buttonClick(1)">映画</button>
                        <button className="button" onClick="buttonClick(2)">書籍</button>
                        <button className="button" onClick="buttonClick(3)">アニメ</button
                    </div>
                </div>
                <div class="right">
                </div>

            </div>

        </div>
    );
}

export default App;