import {useEffect, useState} from "react";


const DB = () => {
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

    return(
        <div className="App">
            <div className="book">
                {/*<h1>データベースからの取得</h1>*/}
                {/*<h2>おすすめ本のタイトル</h2>*/}
                <ul>
                    {book.map((books) => (
                        <p>{books.title}</p>
                    ))}
                </ul>
                {/*<h2>オススメ映画のタイトル</h2>*/}
                {/*<ul>*/}
                {/*    {movie.map((movies) => (*/}
                {/*        <li>*/}
                {/*            <p>{movies.title}</p>*/}
                {/*        </li>*/}
                {/*    ))}*/}
                {/*</ul>*/}
            </div>
        </div>
    )

}

export default DB