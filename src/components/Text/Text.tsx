import { css, cx } from 'emotion';

const fonts = {
  body: css({
    lineHeight: '1.46667'
  }),
  header: css({
    fontSize: '34px',
    lineHeight: '1.17649',
    fontWeight: 400,
    letterSpacing: '0.005em'
  }),
  title: css({
    fontSize: '24px',
    lineHeight: '1.16667',
    fontWeight: 400,
    letterSpacing: '0.007em'
  }),
  headline: css({
    fontSize: '18px',
    lineHeight: '1.22226',
    fontWeight: 400,
    letterSpacing: '0.005em'
  }),
  subheadline: css({
    fontSize: '15px',
    lineHeight: '1.46667',
    fontWeight: 400,
    letterSpacing: '0'
  }),
  label: css({
    fontSize: '14px',
    lineHeight: '1.28577',
    fontWeight: 400,
    letterSpacing: '0'
  }),
  footnote: css({
    fontSize: '11px',
    lineHeight: '1.18182',
    fontWeight: 400,
    letterSpacing: '0.006em'
  })
};

const emphasize = {
  header: css({
    fontWeight: 400
  }),
  title: css({
    fontWeight: 600
  }),
  headline: css({
    fontWeight: 700
  }),
  subheadline: css({
    fontWeight: 600
  }),
  label: css({
    fontWeight: 600
  }),
  caption: css({
    fontWeight: 600
  }),
  footnote: css({
    fontWeight: 500
  })
};

const transform = {
  uppercase: css({
    textTransform: 'uppercase'
  })
};

const colors = {
  primary: css({
    color: 'var(--primary)'
  }),
  secondary: css({
    color: 'var(--secondary)'
  }),
  tertiary: css({
    color: 'var(--tertiary)'
  }),
  quaternary: css({
    color: 'var(--quaternary)'
  })
};

type Font = keyof typeof fonts;
type Color = keyof typeof colors;

interface Props {
  font?: Font;
  color?: Color;
  emphasized?: boolean;
  upcase?: boolean;
}

const Text: React.FC<Props> = ({
  children,
  font,
  color = 'primary',
  emphasized,
  upcase
}) => {
  return (
    <span
      className={cx(
        fonts[font],
        colors[color],
        emphasized && emphasize[font],
        upcase && transform.uppercase
      )}
    >
      {children}
    </span>
  );
};

export default Text;
