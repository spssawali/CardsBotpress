import React, { useState, useEffect } from 'react';
import { fetchCards } from './api';
import CardList from './CardList';
import SearchBar from './SearchBar';
import Chatbot from './Chatbot';
import './App.css';

const App = () => {
  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setisLoading] = useState(true);




  // useEffect(() => {
  //   loadCards();
  // }, [searchTerm]);
  useEffect(()=>{
    console.log("page: ",page)
    loadCards()
  },[page])
  
  useEffect(() => {
    // loadMoreCards();
    console.log("cards : ",cards.length)
  }, [cards]);
  

  const loadCards = async () => {
    const loadedCards = await fetchCards(page, 20, searchTerm);
    setCards(prevCards => [...prevCards, ...loadedCards]);
  };

  const clickLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };
  
  const handleSearch = async () => {
    const loadedCards = await fetchCards(1, 20, searchTerm);
    setCards(loadedCards);
  };
  return (
    <div className="">
      <div className='my-4' style={{textAlign:'center'}}>
      <SearchBar
  searchTerm={searchTerm}
  onSearch={() => handleSearch()}
  onSearchTermChange={(newTerm) => setSearchTerm(newTerm)}
/>
      </div>

      <CardList cards={cards} />
      <div className='my-4' style={{textAlign:'center'}}>
      <button onClick={clickLoadMore}>Load More</button></div>
      {/* <Chatbot /> */}
    </div>
  );
};

export default App;