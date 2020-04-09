import React from 'react';
import { css, cx } from 'emotion';
import Text from '../Text';
import { Item } from './Item';

export const styles = {
  shelf: css({
    position: 'relative',
    width: '100%',
    marginBottom: '32px',
    padding: '0 40px',
    zIndex: 1,
  }),
  header: css({
    display: 'flex',
    alignItems: 'center',
    padding: '13px 40px',
    paddingInlineStart: '0',
    paddingInlineEnd: '0',
  }),
  body: css({
    width: '100%',
    // overflow: 'hidden',
  }),
  list: css({
    display: 'grid',
    gridAutoFlow: 'column',
    overflowX: 'auto',
    overflowY: 'hidden',
    WebkitOverflowScrolling: 'touch',
    scrollBehavior: 'smooth',
    scrollbarWidth: 'none',
    overscrollBehaviorX: 'none',
    scrollSnapType: 'x mandatory',

    gap: '24px',

    marginTop: '-16px',
    marginBottom: '-16px',
    paddingTop: '16px',
    paddingBottom: '16px',
    width: 'calc(100% + 32px)',
    marginInlineStart: '-16px',
    marginInlineEnd: '-16px',
    paddingInlineStart: '16px',
    paddingInlineEnd: '16px',

    // gridColumnGap: '10px',
    // gridAutoColumns: '200px',
    gridTemplateRows: 'repeat(var(--grid-rows), max-content)',

    // '@media only screen and (min-width: 1000px)': {
    //   gridAutoColumns: 'calc((100% - 2 * var(--grid-column-gap)) / 3)',
    //   gridTemplateRows: 'repeat(var(--grid-rows), max-content)',
    //   gridColumnGap: 'var(--grid-column-gap)',
    // },

    '@media only screen and (min-width: 1260px)': {
      gridAutoColumns: 'calc((100% - 3 * var(--grid-column-gap)) / 4)',
      gridTemplateRows: 'repeat(var(--grid-rows), max-content)',
      // gridColumnGap: 'var(--grid-column-gap)',
    },

    // '@media only screen and (min-width: 1580px)': {
    //   gridAutoColumns: 'calc((100% - 4 * var(--grid-column-gap)) / 5)',
    //   gridTemplateRows: 'repeat(var(--grid-rows), max-content)',
    //   gridColumnGap: 'var(--grid-column-gap)',
    // },

    // '@media only screen and (min-width: 1940px)': {
    //   gridAutoColumns: 'calc((100% - 4 * var(--grid-column-gap)) / 5)',
    //   gridTemplateRows: 'repeat(var(--grid-rows), max-content)',
    //   gridColumnGap: 'var(--grid-column-gap)',
    // },
  }),
  arrow: css({
    '&:after': {
      display: 'block',
      content: '""',
      position: 'relative',
      top: '0',
      margin: '0 auto',
      width: '13px',
      height: '29px',
      opacity: '.85',
      backgroundRepeat: 'no-repeat',
      backgroundImage: 'url(/assets/shelf/paddle-dark.svg)',
      zIndex: 1,
    },
  }),
};

interface Props {
  title: string;
  items: TMDB.Movie[];
  className?: string;
}

function MediaShelf({ className, items, title }: Props) {
  const children = items.map((item) => <Item key={item.id} {...item} />);
  const style = {
    ['--grid-rows' as any]: 1,
    ['--grid-column-gap' as any]: '24px',
  };

  return (
    <div className={cx(styles.shelf, className)}>
      <header className={styles.header}>
        <Text font="headline">{title}</Text>
      </header>
      <div className={styles.body}>
        <ul className={styles.list} style={style}>
          {children}
        </ul>
      </div>
      <nav style={{ display: 'none' }}>
        <ul>
          <li>
            <button type="button" className={cx(styles.arrow)}></button>
          </li>
          <li>
            <button type="button" className={cx(styles.arrow)}></button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MediaShelf;
