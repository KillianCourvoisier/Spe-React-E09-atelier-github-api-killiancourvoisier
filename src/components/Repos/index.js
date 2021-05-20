import React from 'react';
import { Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './style.scss';

const Repos = ({ list }) => (
  <Card.Group itemsPerRow={3}>
    <Card
      image="https://avatars3.githubusercontent.com/u/698437?v=4"
      header="Elito Kerba"
      meta="Friend"
      description="Elito is a famous Warrior in Clepsydre TableGame"
    />
  </Card.Group>
);

Repos.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      full_name: PropTypes.string.isRequired,
      description: PropTypes.string,
      owner: PropTypes.shape({

      }),

    }),
  ).isRequired,
};

export default Repos;
