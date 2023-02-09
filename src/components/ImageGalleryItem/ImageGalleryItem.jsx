// ========== styles ==========

import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ img, largeImg, alt, onImgClick }) => (
  <li
    className={styles.imageGalleryItem}
    onClick={() => {
      onImgClick({ largeImg, alt });
    }}
  >
    <img className={styles.imageGalleryItem_image} src={img} alt={alt} />
  </li>
);

export default ImageGalleryItem;
