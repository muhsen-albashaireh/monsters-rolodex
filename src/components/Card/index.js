import { Component } from 'react';
import './styles.css';

class Card extends Component {
  render() {
    const { name, email } = this.props;
    return (
      <li className='card'>
        <img
          src={`https://robohash.org/${name}?set=set2&size=180x180`}
          alt={`monster ${name}`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </li>
    );
  }
}

export default Card;
