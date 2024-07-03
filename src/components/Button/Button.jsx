import css from './Button.module.css';

export const Button = ({ onClickLoadMore }) => {
  return (
    <button className={css.Button} type="button" onClick={onClickLoadMore}>
      LOAD MORE
    </button>
  );
};
