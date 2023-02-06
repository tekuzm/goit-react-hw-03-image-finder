import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

import styles from './ImageGallery.module.css';

const ImageGallery = ({ items }) => (
  <ul className={styles.imageGallery}>
    {items.map(item => (
      <ImageGalleryItem />
    ))}
  </ul>
);

export default ImageGallery;

ImageGallery.defaultProps = {
  items: [],
};
