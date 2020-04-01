import { css } from 'emotion';
import Button from '../Button';
import Stack from '../Stack';
import Text from '../Text';
import { getMovieBackdropURL, formatReleaseDate } from './functions';

const styles = {
  billboard: css({
    position: 'relative',
    width: '100%',
    height: '100vh'
  }),
  backdrop: css({
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  }),
  details: css({
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    left: '15vh',
    bottom: '15vh',
    width: '60em'
  }),
  actions: css({
    gridTemplateColumns: '1fr 1fr',
    width: 'fit-content'
  })
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
        <Stack className={styles.actions} row>
          <Button>Trailer</Button>
          <Button>Watch Now</Button>
        </Stack>
      </div>
    </div>
  );
};

export default Billboard;
