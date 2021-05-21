// == Import npm
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Message, Button } from 'semantic-ui-react';
import { Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

// == Import
import Header from '../Header';
import Repos from '../Repos';
import SingleRepo from '../SingleRepo';
import './style.scss';

const BASE_URL = 'https://api.github.com/search/repositories?q=';
const REPO_URL = 'https://api.github.com/repos';

// == Composant
const App = () => {
  const [message, setMessage] = useState('Il n\'y a pas encore de résultats');
  const [inputText, setInputText] = useState('react');
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [fullRepo, setFullRepo] = useState({});

  const handleInputChange = (textSaisi) => {
    setInputText(textSaisi);
  };

  const fetchDatas = async () => {
    if (!inputText) return;
    setLoading(true);
    const filters = `&sort=stars&order=desc&page=${activePage}&per_page=9`;

    try {
      const results = await axios({
        method: 'get',
        url: `${BASE_URL}${inputText}${filters}`,
      });
      // Dans mon state, je veux tous les résultats originaux
      // PLUS les nouveaux.
      // Du coup dans un nouveau tableau, je récupère tous les anciens
      // repos, et j'ajoute à la suite les nouveaux
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

  const fetchOneRepo = async (orga, repo) => {
    const url = `${REPO_URL}/${orga}/${repo}`;
    setLoading(true);
    try {
      const response = await axios({
        method: 'get',
        url,
      });
      console.log(response.data);
      setFullRepo(response.data);
    }
    catch (e) {
      console.trace(e);
    }
    setLoading(false);
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
      <Route exact path="/">
        <Message content={message} />
        <Repos list={repos} />
        <Button
          fluid
          color="teal"
          icon="plus"
          size="massive"
          content="Afficher plus..."
          onClick={handleShowMore}
          loading={loading}
          disabled={loading}
        />
      </Route>
      <Route
        path="/repos/:orga/:repo"
        render={(infosDuRouteur) => {
          const { orga, repo } = infosDuRouteur.match.params;

          return (
            <SingleRepo
              activeRepo={fullRepo}
              fetchRepo={() => {
                fetchOneRepo(orga, repo);
              }}
            />
          );
        }}
      />

    </div>
  );
};
// == Export
export default App;
