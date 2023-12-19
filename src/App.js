import React, {useEffect, useState} from "react";
import "./App.css";
import non from "./noimage.jpeg"




function App() {

    const [book,setbook] = useState([]);
    const [movie, setmovie] = useState([])

    const [show, setshow] = useState(false)
    const [showdata, setshowdata] = useState([])

    const alldata = [[],[],[],[],[],[],[],[],[],[],[],[],[]]


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




    const all = () => {
        const data = [[],[],[],[],[],[],[],[],[],[],[],[],[]]
        book.forEach((books,i) => {
            data[i % 13].push(books)
        })
        movie.forEach((movies,i) => {
            data[i % 13].push(movies)
        })
        setshowdata(data)
    }



    const bookdata = () => {
        const data = [[],[],[],[],[],[],[],[],[],[],[],[],[]]
        book.forEach((books,i) => {
            data[i % 13].push(books)
        })
        setshowdata(data)
    }

    const movidata = () => {
        const data = [[],[],[],[],[],[],[],[],[],[],[],[],[]]
        movie.forEach((movies,i) => {
            data[i % 13].push(movies)
        })
        setshowdata(data)
    }



    return (
        <div className="App">
            <div className="container">
                <div className="left">
                    <div className="top-left">
                        <div className="center">
                            {showdata.map((datas) => (
                            <>
                                <div className="CSSMarquee">
                                    <p>{datas.map((data) => (
                                        <span onClick={() => setshow(data)}>
                                            {data.title + "　　　　"}
                                        </span>))}
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
                            ))}
                        </div>
                    </div>
                    <div className="button-left">
                        <h1 className="lettercolor">暇人 ”暇を楽しみに変える”</h1>
                        <button className="button" onClick={movidata}>映画</button>
                        <button className="button" onClick={bookdata}>書籍</button>
                        <button className="button" onClick={all}>全部</button>

                    </div>
                </div>
                <div class="right">
                    <a href="http://asa0325.ddo.jp">
                        <img className="asa" src="./asa.png" alt="ad"/>
                    </a>
                </div>

            </div>

        </div>
    );
}

export default App;