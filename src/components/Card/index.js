import './styles.css';

const Card = props => {
  const { name, email } = props;
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
};

export default Card;
