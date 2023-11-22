import React, {useState} from "react";
import Booksdb from "./acquisition/Booksdb";
import Marquee from "react-fast-marquee";


function Model() {
    const [show, setshow] = useState(false)
    if (show) {
        return (
            <div className="overlay">
                <div className="content">
                    <button onClick={() => setshow(false)}>Close</button>
                    <img src={"https://image.tmdb.org/t/p/w500/x5o8cLZfEXMoZczTYWLrUo1P7UJ.jpg"} height={300} width={500}/>
                </div>
            </div>
        );
    } else {
        return (
            <div onClick={() => setshow(true)}>
                <Marquee>
                    ワンピース
                </Marquee>
            </div>


        )
    }
}

export default Model;