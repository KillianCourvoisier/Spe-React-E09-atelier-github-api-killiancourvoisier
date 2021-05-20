// == Import npm
import React, { useState } from 'react';
import axios from 'axios';
import { Message } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

// == Import
import Header from '../Header';
import Repos from '../Repos';
import './style.scss';

const BASE_URL = 'https://api.github.com/search/repositories?q=';

// == Composant
const App = () => {
  const [message, setMessage] = useState('Aucune recherche effectuée');
  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);

  const handleInputChange = (textSaisi) => {
    setInputText(textSaisi);
  };

  const fetchDatas = async () => {
    setLoading(true);

    try {
      const results = await axios({
        method: 'get',
        url: `${BASE_URL}${inputText}`,
      });

      setRepos(results.data.items);
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
    </div>
  );
};
// == Export
export default App;
