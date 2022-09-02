import { Component } from 'react';
import Card from '../Card';
import './styles.css';

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <ul className='card-list'>
        {monsters.map(({ name, email, id }) => (
          <Card name={name} email={email} key={id} />
        ))}
      </ul>
    );
  }
}
export default CardList;
