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

  useEffect(() => {
    const loadInitialCards = async () => {
      const loadedCards = await fetchCards(page, 20, searchTerm);
      setCards(loadedCards);
    };

    loadInitialCards();
  }, []); // Empty dependency array ensures this useEffect runs only on mount

  useEffect(() => {
    console.log("page: ", page);
    // loadMoreCards(); // Remove this line if it's not needed here
    console.log("cards : ", cards.length);
  }, [cards]);

  const loadMoreCards = async () => {
    const loadedCards = await fetchCards(page + 1, 20, searchTerm);
    setCards((prevCards) => [...prevCards, ...loadedCards]);
    setPage((prevPage) => prevPage + 1);
  };

  const handleSearch = async () => {
    const loadedCards = await fetchCards(1, 20, searchTerm);
    setCards(loadedCards);
    setPage(2); // Reset the page to 2 when a new search is performed
  };

  return (
    <div className="">
      <div className="my-4" style={{ textAlign: 'center' }}>
        <SearchBar
          searchTerm={searchTerm}
          onSearch={() => handleSearch()}
          onSearchTermChange={(newTerm) => setSearchTerm(newTerm)}
        />
      </div>

      <CardList cards={cards} />
      <div className="my-4" style={{ textAlign: 'center' }}>
        <button onClick={loadMoreCards}>Load More</button>
      </div>
      {/* <Chatbot /> */}
    </div>
  );
};

export default App;
