import { css } from 'emotion';
import Button from '../Button';
import Stack from '../Stack';
import Text from '../Text';
import { getMovieBackdropURL, formatReleaseDate } from './functions';

const styles = {
  billboard: css({
    position: 'relative',
    width: '100vw',
    height: '100vh',
    maxWidth: '100%',
    maxHeight: '100%',
    '&:before': {
      content: '""',
      display: 'block',
      background:
        'linear-gradient(77deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 85%)',
      position: 'absolute',
      top: '0',
      left: '0',
      right: '26%',
      bottom: '0',
      opacity: '1',
      transition: 'opacity 500ms',
      zIndex: 1,
    },
  }),
  backdrop: css({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  }),
  details: css({
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    left: '15vh',
    bottom: '15vh',
    width: '40em',
    maxWidth: 'calc(100% - 30vh)',
    textShadow: 'rgba(0, 0, 0, 0.45) 2px 2px 4px',
    zIndex: 2,
  }),
  actions: css({
    gridTemplateColumns: '1fr 1fr',
    width: 'fit-content',
    marginTop: '1.5rem',
  }),
};

const Billboard = (props: TMDB.Movie) => {
  const backdrop = getMovieBackdropURL(props);
  return (
    <div className={styles.billboard}>
      <img className={styles.backdrop} src={backdrop} alt={props.title} />
      <div className={styles.details}>
        <Text font="subheadline" color="secondary" upcase>
          {formatReleaseDate(props)}
        </Text>
        <Text font="header" emphasized>
          {props.title}
        </Text>
        <Stack className={styles.actions}>
          <Button>Trailer</Button>
          <Button color="secondary">Watch Now</Button>
        </Stack>
      </div>
    </div>
  );
};

export default Billboard;
