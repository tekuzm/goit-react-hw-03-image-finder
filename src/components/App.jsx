import React, { Component } from 'react';
import axios from 'axios';
import { Vortex } from 'react-loader-spinner';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

class App extends Component {
  state = {
    search: '',
    images: [],
    loading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { search } = this.state;
    if (prevState.search !== search) {
      axios(
        `https://pixabay.com/api/?q=${search}&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(({ data }) => this.setState({ images: data }))
        .catch(error => this.setState({ error: error.message }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  searchImages = ({ search }) => {
    this.setState({ search });
  };

  render() {
    const { images, error, loading } = this.state;

    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridGap: '16px',
          paddingBottom: '24px',
        }}
      >
        <Searchbar onSubmit={this.searchImages} />
        <ImageGallery items={images} />
        {error && <p>{error}</p>}
        {loading && <p>...loading</p>}
      </div>
    );
  }
}

export default App;
