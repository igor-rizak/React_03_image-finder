import css from './ImageGallery.module.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ hits, modalOpen }) => {
  return (
    <ul className={css.ImageGallery}>
      <ImageGalleryItem hits={hits} modalOpen={modalOpen} />
    </ul>
  );
};
