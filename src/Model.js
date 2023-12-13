import React, {useEffect, useState} from "react";
import non from "./noimage.jpeg"
import Booksdb from "./acquisition/Booksdb";
import Marquee from "react-fast-marquee";
import books from "./Books";


function Model() {
    const [book,setbook] = useState([]);
    const [movie, setmovie] = useState([])

    useEffect(() => {
        // 漫画と小説データベースのURL
        // 映画のデータベースのURL
        const bookUrl = `http://localhost:8080/book`
        const movieUrl = `http://localhost:8080/movie`

        fetch(bookUrl, {
            mode : "cors"
        })
            .then((response) => response.json())
            .then((data) => {
                const bookData = data.data || [];
                setbook(bookData);
            })
            .catch((error) => {
                console.error('データ取得に失敗しました', error)
            })


        fetch(movieUrl, {
            mode : "cors"
        })
            .then((response) => response.json())
            .then((data) => {
                const movieData = data.data || [];
                setmovie(movieData);
            })
            .catch((error) => {
                console.error('データ取得に失敗しました',error)
            })

    }, []);

    const [show, setshow] = useState(false)


    const showdata = [[],[],[],[],[],[],[],[],[],[],[],[],[]]
    book.forEach((books,i) => {
        showdata[i % 13].push(books)
    })
    movie.forEach((movies,i) => {
        showdata[i % 13].push(movies)
    })

    return showdata.map((datas) => (
        <>
            <div className="CSSMarquee">
                <p>{datas.map((data) => (
                    <span onClick={() => setshow(data)}>
                        {data.title + "　　　　"}
                    </span>
                ))}
                </p>
            </div>

            {
                show ?
                    <div className="overlay">
                        <div className="content">
                            {/*<a href="" className="btn btn-gradient" onClick={()=>setshow(false)}><span>Close</span></a>*/}
                            <h1 className={"font"}>{show.title ? show.title : "Non Title"}</h1>
                            <img className={"img"} src={show.poster ? show.poster : non} height={400} width={400} alt={""}/>
                            <h3 className={"author"}>{show.author ? show.author : "情報がありません"}</h3>
                            <button className={"button"} onClick={() => setshow(false)}>閉じる</button>
                        </div>
                    </div>
                    : ""

            }

        </>
    ))
}

export default Model;