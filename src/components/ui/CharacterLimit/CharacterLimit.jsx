import PropTypes from 'prop-types';

import styles from './CharacterLimit.module.css';

function CharacterLimit({ children, limit, value }) {
  const len = value.length;

  return (
    <div data-testid="limit-container" className={styles.container}>
      <span data-testid="limit" className={styles.limit}>
        {len} / {limit}
      </span>
      {children}
    </div>
  );
}

CharacterLimit.propTypes = {
  children: PropTypes.element,
  limit: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
};

export default CharacterLimit;
