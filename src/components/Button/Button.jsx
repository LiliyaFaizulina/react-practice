import style from './Button.module.css';

export const Button = ({ type, text, clickHandler }) => (
  <button className={style.mainBtn} type={type} onClick={clickHandler}>
    {text}
  </button>
);
