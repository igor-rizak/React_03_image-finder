import { Component } from 'react';
import css from './Searchbar.module.css';

class SearchBar extends Component {
  state = {
    inputQuery: '',
  };

  changeInput = e => {
    const query = e.target.value;
    this.setState({ inputQuery: query });
  };

  onQuerySubmit = e => {
    e.preventDefault();
    this.props.handleChange(this.state.inputQuery);
    this.setState({ inputQuery: '' });
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.onQuerySubmit}>
          <button type="submit" className={css.SearchForm_button}>
            <span className={css.SearchForm_button_label}>Search</span>
          </button>

          <input
            value={this.state.inputQuery}
            className={css.SearchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.changeInput}
          />
        </form>
      </header>
    );
  }
}

export default SearchBar;
