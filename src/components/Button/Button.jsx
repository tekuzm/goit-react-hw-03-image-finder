// ========== styles ==========

import styles from './Button.module.css';

const Button = ({ clickHandler }) => (
  <button className={styles.button} type="button" onClick={clickHandler}>
    Load more
  </button>
);

export default Button;
