import React, { useState } from "react";
// import axios from "axios";
import './SneakerList.css';

function SneakerList() {
  const [cats, setCats] = useState([]);
  const [page, setPage] = useState(1);
  // ----------------------------------------------------------------
  //using fetch 
	// const handleUploadSneakers = () => {
	// 	fetch('https://pokeapi.co/api/v2/pokemon/')
	// 	.then((res) => res.json())
	// 	.then((data) => console.log(data))
	// 	.catch((error) => console.error(error))
	// }
  // ----------------------------------------------------------------

  const handleUploadSneakers = async () => {
    try {
      const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();
      console.log(data);
      setCats(data);
    } catch (error) {
      console.error(error);
    }
  }

  const handleLoadMore = (e) => {
    e.preventDefault();
    fetch(`https://api.thecatapi.com/v1/images/search?limit=10&page=${page + 1}`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setCats([...cats, ...data]);
      setPage(page + 1);
    })
    .catch(err => console.error(err))
  }

  return (
    <>
      <button onClick={handleUploadSneakers}>Upload sneakers</button>
      {cats.length > 0 ? ( // Перевірка, чи є фотографії
        <ul className="catList">
          {cats.map((cat, index) => (
            <li key={index} className="catLi">
              <img className='photoCat' alt={cat.id} src={cat.url}/>
              <div>{cat.height} cm</div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No photos available</p> // Виведення повідомлення про відсутність фотографій
      )}
      {cats.length > 0 && ( // Перевірка, чи є фотографії
      <button onClick={handleLoadMore}>Load More</button>
    )}
    </>
  );
  
}

export default SneakerList;