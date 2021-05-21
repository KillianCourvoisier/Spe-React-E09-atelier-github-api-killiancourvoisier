import React from 'react';
import { Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './style.scss';

const Repos = ({ list }) => (
  <div className="repos-list">
    {
      list.map((repoObj) => (
        <div className="repo-item">
          <Card
            style={{ height: '100%' }}
            fluid
            key={repoObj.id}
            image={repoObj.owner.avatar_url}
            header={repoObj.name}
            meta={repoObj.owner.login}
            description={repoObj.description ? repoObj.description : ''}
          />
        </div>
      ))
    }
  </div>
);

Repos.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      full_name: PropTypes.string.isRequired,
      description: PropTypes.string,
      owner: PropTypes.shape({
        login: PropTypes.string.isRequired,
        avatar_url: PropTypes.string.isRequired,
      }),

    }),
  ).isRequired,
};

export default Repos;
