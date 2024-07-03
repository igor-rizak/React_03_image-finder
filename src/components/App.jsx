import { Component } from 'react';

import { restApi } from './API/API';
import SearchBar from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

class App extends Component {
  state = {
    query: '',
    list: [],
  };

  handleChange = async data => {
    if (!data) return;
    try {
      const result = await restApi(data);
      this.setState(prevState => ({
        list: [...prevState.list, ...result.hits],
      }));
    } catch (error) {
      console.log(error.message);
    }
  };

  render() {
    const { list } = this.state;
    return (
      <>
        <SearchBar handleChange={this.handleChange} />
        {list && <ImageGallery hits={this.state.list} />}
      </>
    );
  }
}

export default App;
