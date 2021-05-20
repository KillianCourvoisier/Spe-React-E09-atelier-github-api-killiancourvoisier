import React from 'react';
import { Segment, Input } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './style.scss';
import logo from 'src/assets/images/logo-github.png';

const Header = () => (
  <header className="header">
    <img className="header__logo" src={logo} alt="logo github" />
    <Segment>
      <form>
        <Input
          fluid
          icon="search"
          iconPosition="left"
          placeholder="Chercher un repo Github"
        />
      </form>
    </Segment>

  </header>
);

export default Header;
