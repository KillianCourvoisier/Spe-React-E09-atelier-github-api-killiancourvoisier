import React, { useEffect } from 'react';
import { Table, Icon, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './style.scss';

const SingleRepo = ({ activeRepo, fetchRepo }) => {
  useEffect(fetchRepo, []);
  if (!activeRepo.id) return <p>Loading...</p>;
  return (
    <div className="single-repo">
      <h1>{ activeRepo.name.toUpperCase() }</h1>
      <p>Retrouvez tous les détails sur ${activeRepo.full_name}</p>
      <h2>Organisation</h2>
      <div className="owner">
        <img className="owner-avatar" alt="avatar" src={activeRepo.owner.avatar_url} />
        <p className="owner-login">{ activeRepo.owner.login }</p>
        <Button
          basic
          content="Voir l'organisation"
          href={activeRepo.owner.html_url}
        />
      </div>
      <h2>Informations générales</h2>
      <p className="repo-description">
        { activeRepo.description}
      </p>
      <Button
        basic
        content="Voir le repo"
        href={activeRepo.html_url}
      />
      <h2>Contenus</h2>
      <Table celled striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan="3">Git Repository</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell collapsing>
              <Icon name="folder" /> node_modules
            </Table.Cell>
            <Table.Cell>Initial commit</Table.Cell>
            <Table.Cell collapsing textAlign="right">
              10 hours ago
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Icon name="folder" /> test
            </Table.Cell>
            <Table.Cell>Initial commit</Table.Cell>
            <Table.Cell textAlign="right">10 hours ago</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Icon name="folder" /> build
            </Table.Cell>
            <Table.Cell>Initial commit</Table.Cell>
            <Table.Cell textAlign="right">10 hours ago</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Icon name="file outline" /> package.json
            </Table.Cell>
            <Table.Cell>Initial commit</Table.Cell>
            <Table.Cell textAlign="right">10 hours ago</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Icon name="file outline" /> Gruntfile.js
            </Table.Cell>
            <Table.Cell>Initial commit</Table.Cell>
            <Table.Cell textAlign="right">10 hours ago</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};
SingleRepo.propTypes = {
  activeRepo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    full_name: PropTypes.string.isRequired,
    description: PropTypes.string,
    html_url: PropTypes.string.isRequired,
    owner: PropTypes.shape({
      login: PropTypes.string.isRequired,
      avatar_url: PropTypes.string.isRequired,
      html_url: PropTypes.string.isRequired,
    }),
  }).isRequired,
  fetchRepo: PropTypes.func.isRequired,
};

export default SingleRepo;
