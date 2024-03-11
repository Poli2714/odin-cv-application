import PropTypes from 'prop-types';

import styles from './Photo.module.css';

function Photo({ size, src }) {
  return (
    <div data-testid="photo">
      <img
        src={src}
        alt="Photo"
        className={styles.photo}
        height={size}
        width={size}
      />
    </div>
  );
}

Photo.propTypes = {
  size: PropTypes.number,
  src: PropTypes.string,
};

export default Photo;
