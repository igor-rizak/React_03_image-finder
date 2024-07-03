import { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { restApi } from './API/API';
import SearchBar from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import { Button } from './Button/Button';

class App extends Component {
  state = {
    query: '',
    list: [],
    isModalVisible: false,
    modalData: null,
    page: 1,
    loadMore: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { page, query } = this.state;
    if (page !== prevState.page || query !== prevState.query) {
      this.setState({ isLoading: true });
      try {
        const { hits, totalHits } = await restApi(query, page);
        if (hits.length === 0) {
          toast.error('Sorry, nothing found. Try again');
        }
        this.setState(prevState => ({
          list: [...prevState.list, ...hits],
          loadMore: this.state.page < Math.ceil(totalHits / 12),
        }));
      } catch (error) {
        console.log(error.message);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  handleChange = query => {
    this.setState(prevState => {
      if (prevState.query === query) {
        return null;
      } else {
        return { query, list: [], page: 1 };
      }
    });
  };

  openModal = (largeImageURL, tags) => {
    this.setState({ modalData: { largeImageURL, tags }, isModalVisible: true });
  };

  modalClose = () => {
    this.setState({ isModalVisible: false, modalData: null });
    document.body.classList.remove('no-scroll');
  };

  onClickLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { list, modalData, isModalVisible, loadMore } = this.state;
    return (
      <>
        <SearchBar handleChange={this.handleChange} />
        <Toaster />
        {list && (
          <ImageGallery hits={this.state.list} modalOpen={this.openModal} />
        )}
        {isModalVisible && (
          <Modal modalData={modalData} modalClose={this.modalClose} />
        )}
        {loadMore && <Button onClickLoadMore={this.onClickLoadMore} />}
      </>
    );
  }
}

export default App;
