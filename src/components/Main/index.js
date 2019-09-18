import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

export default class Main extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    this.loadUsers();
  }

  loadUsers = async () => {
    const response = await api.get('/users');
    console.log(response.data);
    this.setState({ users: response.data })
  }

  render() {
    return (
      <>
        <ul>
          {this.state.users.map(user => (
            <li key={user.id}>{user.name}
              <Link to={`/users/${user.id}`}>Acessar</Link>
            </li>
          ))}
        </ul>
      </>
    )
  }
}