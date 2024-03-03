import PropTypes from 'prop-types';

import styles from './Form.module.css';

function Form({ children, isActive }) {
  return (
    <form
      action=""
      className={`${styles.form} ${isActive ? styles.active : styles.inactive}`}
      data-testid="form"
      method="get"
    >
      {children}
    </form>
  );
}

Form.propTypes = {
  children: PropTypes.node,
  isActive: PropTypes.bool,
};

export default Form;
