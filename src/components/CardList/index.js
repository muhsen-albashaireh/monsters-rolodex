import Card from '../Card';
import './styles.css';

const CardList = ({ monsters }) => (
  <ul className='card-list'>
    {monsters.map(({ name, email, id }) => (
      <Card name={name} email={email} key={id} />
    ))}
  </ul>
);

export default CardList;
