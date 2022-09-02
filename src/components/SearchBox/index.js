import { Component } from 'react';
import './styles.css';

class SearchBox extends Component {
  render() {
    const { onChangeHandler, placeholder, className } = this.props;
    return (
      <input
        type='search'
        onChange={onChangeHandler}
        placeholder={placeholder}
        className={className}
      />
    );
  }
}

export default SearchBox;
