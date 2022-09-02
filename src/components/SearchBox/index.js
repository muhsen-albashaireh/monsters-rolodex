import './styles.css';

const SearchBox = props => {
  const { onChangeHandler, placeholder, className } = props;
  return (
    <input
      type='search'
      onChange={onChangeHandler}
      placeholder={placeholder}
      className={className}
    />
  );
};

export default SearchBox;
