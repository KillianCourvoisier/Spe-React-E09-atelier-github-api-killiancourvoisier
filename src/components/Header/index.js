import React from 'react';
import { Segment, Input } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './style.scss';
import logo from 'src/assets/images/logo-github.png';

const Header = ({ inputValue, onInputChange, onFormSubmit }) => (
  <header className="header">
    <img className="header__logo" src={logo} alt="logo github" />
    <Segment>
      <form onSubmit={(evt) => {
        evt.preventDefault();
        onFormSubmit();
      }}
      >
        <Input
          fluid
          icon="search"
          iconPosition="left"
          placeholder="Chercher un repo Github"
          value={inputValue}
          onChange={(evt) => {
            const text = evt.target.value;
            onInputChange(text);
          }}
        />
      </form>
    </Segment>

  </header>
);

Header.propTypes = {
  inputValue: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
};

export default Header;
