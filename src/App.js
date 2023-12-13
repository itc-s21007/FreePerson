import React, {useState} from "react";
import "./App.css";
import Booksdb from "./acquisition/Booksdb";
import non from "./noimage.jpeg"
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

                    </div>
                </div>
                <div class="right">
                    <img className={non}/>
                </div>

            </div>

        </div>
    );
}

export default App;