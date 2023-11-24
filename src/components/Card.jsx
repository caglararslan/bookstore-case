import {useContext} from 'react'
import ThemeContext from "../context/ThemeContext";

function Card({book}) {
    const data = useContext(ThemeContext);
    const addToBasket = () => {
        data.setBasket([{name:book.volumeInfo.title},...data.basket])
        console.log(data);
    }
    return (
        <div className="showcase-item">
            <div className="showcase-image">
                <img src={book.volumeInfo.imageLinks !== undefined ? book.volumeInfo.imageLinks.thumbnail : ''} alt={book.title} alt="" />
            </div>
            <div className="showcase-content">
                <div className="showcase-author">{book.volumeInfo.authors}</div>
                <div className="showcase-title">{book.volumeInfo.title}</div>
                <div className="showcase-button">
                    <button onClick={addToBasket}>Add To Basket</button>
                </div>
            </div>
        </div>
    )
}

export default Card
