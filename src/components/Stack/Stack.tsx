import { css, cx } from 'emotion';

const styles = {
  stack: css({
    display: 'grid',
    gap: 24
  }),
  row: css({
    gridAutoFlow: 'column'
  })
};

interface Props {
  row?: boolean;
  className?: string;
}

const Stack: React.FC<Props> = ({ children, className, row }) => {
  return (
    <div className={cx(styles.stack, row && styles.row, className)}>
      {children}
    </div>
  );
};

export default Stack;
