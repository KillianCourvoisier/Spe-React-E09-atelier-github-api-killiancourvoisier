// == Import npm
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Message } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

// == Import
import Header from '../Header';
import Repos from '../Repos';
import './style.scss';

const BASE_URL = 'https://api.github.com/search/repositories?q=';

// == Composant
const App = () => {
  const [message, setMessage] = useState('Aucune recherche effectuée');
  const [inputText, setInputText] = useState('react');
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);
  const [activePage, setActivePage] = useState(1);

  const handleInputChange = (textSaisi) => {
    setInputText(textSaisi);
  };

  const fetchDatas = async () => {
    setLoading(true);
    const filters = `&sort=stars&order=desc&page=${activePage}&per_page=9`;

    try {
      const results = await axios({
        method: 'get',
        url: `${BASE_URL}${inputText}${filters}`,
      });

      setRepos([...repos, ...results.data.items]);
      const newMessage = `La recherche a générée ${results.data.total_count} résultats`;
      setMessage(newMessage);
    }
    catch (e) {
      console.trace(e);
    }

    setLoading(false);
  };

  const handleFormSubmit = () => {
    fetchDatas();
  };

  const handleShowMore = () => {
    setActivePage(activePage + 1);
  };

  useEffect(fetchDatas, [activePage]);

  return (
    <div className="app">
      <Header
        loading={loading}
        inputValue={inputText}
        onInputChange={handleInputChange}
        onFormSubmit={handleFormSubmit}
      />
      <Message content={message} />
      <Repos list={repos} />
      <Button
        fluid
        color="teal"
        icon="plus"
        size="massive"
        content="Afficher plus ..."
        onClick={handleShowMore}
        loading={loading}
        disabled={loading}
      />
    </div>
  );
};
// == Export
export default App;
