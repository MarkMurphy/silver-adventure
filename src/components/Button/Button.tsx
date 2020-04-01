import { css } from 'emotion';

const styles = {
  button: css({
    fontSize: 17,
    border: 0,
    borderRadius: 6,
    height: 56,
    paddingLeft: 32,
    paddingRight: 32
  })
};

const Button = ({ children }) => {
  return <button className={styles.button}>{children}</button>;
};

export default Button;
