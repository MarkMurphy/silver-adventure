import React from 'react';
import { css } from 'emotion';
import { getMoviePosterURL } from './functions';

export const styles = {
  item: css({
    scrollSnapAlign: 'start',
    marginInlineStart: '-16px',
    marginInlineEnd: '-16px',
    paddingInlineStart: '16px',
    paddingInlineEnd: '16px',
    // mask:
    //   'linear-gradient(90deg, transparent 0, #000 16px, #000 calc(100% - 16px), transparent 100%)',
  }),
  media: css({
    width: '100%',
    height: '100%',
  }),
  artwork: css({
    width: '100%',
    position: 'relative',
    boxShadow: '0 0 0 1px rgba(0,0,0,.05), 0 0 10px rgba(0,0,0,.25)',
    '& img': {
      display: 'block',
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: '4px',
    },
  }),
  details: css({
    display: 'flex',
    paddingTop: '4px',
    wordBreak: 'break-word',
  }),
};

export function Item(props: TMDB.Movie) {
  return (
    <li className={styles.item}>
      <div className={styles.media}>
        <div className={styles.artwork}>
          <img src={getMoviePosterURL(props)} alt={props.title} />
        </div>
      </div>
    </li>
  );
}
