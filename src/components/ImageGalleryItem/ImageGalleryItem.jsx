import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ hits }) => {
  return (
    <>
      {hits.map(item => (
        <li key={item.id} className={css.ImageGalleryItem}>
          <img
            src={item.webformatURL}
            alt={item.tags}
            className={css.ImageGalleryItem_image}
          />
        </li>
      ))}
    </>
  );
};
