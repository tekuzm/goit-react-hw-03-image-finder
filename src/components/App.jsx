import React, { Component } from 'react';

// ========== components ==========

import searchImages from './services/api';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import LargeImage from './LargeImage/LargeImage';
import Loader from './Loader/Loader';

// ========== styles ==========

import styles from './App.module.css';

class App extends Component {
  state = {
    search: '',
    images: [],
    page: 1,
    isLoading: false,
    error: null,
    showModal: false,
    largeImage: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { search, page } = this.state;

    if (prevState.search !== search || prevState.page !== page) {
      this.setState({ isLoading: true });
      this.fetchImages();
    }
  }

  async fetchImages() {
    try {
      const { images, search, page } = this.state;
      const response = await searchImages(search, page);
      const imagesInfo = response.map(
        ({ id, webformatURL, largeImageURL, tags }) => {
          return {
            id,
            smallImg: webformatURL,
            largeImg: largeImageURL,
            descr: tags,
          };
        }
      );

      this.setState({ images: [...images, ...imagesInfo] });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  searchImages = ({ search }) => {
    this.setState({ search, images: [], page: 1 });
  };

  onLoadMore = () => {
    const { page } = this.state;
    this.setState({ page: page + 1 });
  };

  onModalOpen = ({ largeImg, alt }) => {
    this.setState({ largeImage: { largeImg, alt }, showModal: true });
  };

  onModalCLose = () => {
    this.setState({ showModal: false, largeImage: '' });
  };

  render() {
    const { images, isLoading, error, showModal, largeImage } = this.state;

    return (
      <div className={styles.app}>
        <Searchbar onSubmit={this.searchImages} />
        <ImageGallery items={images} openModal={this.onModalOpen} />
        {error && <p>{error}</p>}
        {isLoading && <Loader />}
        {Boolean(images.length) && (
          <div className={styles.buttonWrap}>
            <Button clickHandler={this.onLoadMore} />
          </div>
        )}

        {showModal && (
          <Modal closeModal={this.onModalCLose}>
            <LargeImage {...largeImage} />
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
