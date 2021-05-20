import React from 'react';
import { Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './style.scss';

const Repos = () => (
  <Card.Group itemsPerRow={3}>
    <Card
      image="https://avatars3.githubusercontent.com/u/698437?v=4"
      header="Elito Kerba"
      meta="Friend"
      description="Elito is a famous Warrior in Clepsydre TableGame"
    />
    <Card
      image="https://avatars3.githubusercontent.com/u/698437?v=4"
      header="Elito Kerba"
      meta="Friend"
      description="Elito is a famous Warrior in Clepsydre TableGame"
    />
    <Card
      image="https://avatars3.githubusercontent.com/u/698437?v=4"
      header="Elito Kerba"
      meta="Friend"
      description="Elito is a famous Warrior in Clepsydre TableGame"
    />
  </Card.Group>
);

export default Repos;
