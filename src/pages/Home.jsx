import { React,useEffect, useState, useContext } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import ThemeContext from "../context/ThemeContext"
import ReactDOM from 'react-dom';
import Modal from 'react-modal';


function Home() {
    let subtitle;
    const data = useContext(ThemeContext);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [book, setBook] = useState("");  
    const [result, setResult] = useState([]);  
    const [apiKey, setApiKey] = useState("AIzaSyCqi37mzRrzkBrDZDb0BX9_IarX5iMOT88");

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
    
    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
    }

    function closeModal() {
        setIsOpen(false);
    }

    function handleChange(event) {  
        const book = event.target.value;  
        setBook(book);  
    }

    function handleSubmit(event) {  
        event.preventDefault();  
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book + "&key=" + apiKey + "&maxResults=40")  
            .then(data => {  
                console.log(data.data.items);  
                setResult(data.data.items);  
            })  
    }  

    return (
        <div className="home-page">
            <div className="container">
                <div className="search">
                    <form onSubmit={handleSubmit}>  
                        <div className="search">  
                            <input onChange={handleChange} placeholder="Type something..." type="text" />  
                            <input type="submit" className="btn btn-primary" value="Search"/>  
                        </div>
                    </form>
                </div>
                <div className="row">
                    {result.map(book => (  
                        <div key={book.id} className="col-sm-3">  
                            <Card book={book}/>
                        </div>  
                    ))}  
                </div>  
            </div>
            <button className="modal-button" onClick={openModal}>Aç</button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
            >
                <div className="card-title">My Card</div>
                <ul className="cart-items">
                    {
                        data.basket.map(list=> {
                            return (
                                <li>{list.name}</li>
                            )
                        })
                    }
                </ul>
            </Modal>
        </div>
    )
}

export default Home
