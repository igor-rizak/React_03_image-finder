import css from './ImageGallery.module.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ hits }) => {
  return (
    <ul className={css.ImageGallery}>
      <ImageGalleryItem hits={hits} />
    </ul>
  );
};
