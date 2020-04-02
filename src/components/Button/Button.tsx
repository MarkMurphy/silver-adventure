import { css, cx } from 'emotion';

const styles = {
  button: css({
    fontSize: 17,
    letterSpacing: '0.007em',
    border: 0,
    borderRadius: 6,
    color: '#fff',
    cursor: 'pointer',
    background: 'linear-gradient(#07B1FD, #0379FB)',
    height: 56,
    paddingLeft: 32,
    paddingRight: 32,
    textAlign: 'center',
    textShadow: 'none',
    whiteSpace: 'nowrap',
    '&:focus': {
      boxShadow: '0 0 0 3px rgba(131, 192, 253, .5)',
      outline: 'none'
    }
  })
};

const colors = {
  primary: css({
    color: '#fff',
    background: 'linear-gradient(#07B1FD, #0379FB)',
    '&:hover': {
      background: 'linear-gradient(#46BEFE, #2189FC)'
    }
  }),
  secondary: css({
    background:
      'linear-gradient(rgba(255, 255, 255, .3), rgba(255, 255, 255, .07))',
    backdropFilter: 'saturate(50%) blur(12px)',
    '&:hover': {
      background:
        'linear-gradient(rgba(255, 255, 255, .4), rgba(255, 255, 255, .1))'
    }
  })
};

type Color = keyof typeof colors;

interface Props {
  color?: Color;
  className?: string;
}

const Button: React.FC<Props> = ({
  children,
  className,
  color = 'primary',
  ...props
}) => {
  return (
    <button
      {...props}
      className={cx(styles.button, color && colors[color], className)}
    >
      {children}
    </button>
  );
};

export default Button;
