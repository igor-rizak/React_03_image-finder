import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ hits, modalOpen }) => {
  return (
    <>
      {hits.map(({ id, webformatURL, tags, largeImageURL }) => (
        <li
          key={id}
          className={css.ImageGalleryItem}
          onClick={() => {
            modalOpen(largeImageURL, tags);
          }}
        >
          <img
            src={webformatURL}
            alt={tags}
            className={css.ImageGalleryItem_image}
          />
        </li>
      ))}
    </>
  );
};
