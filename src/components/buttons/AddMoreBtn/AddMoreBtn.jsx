import PropTypes from 'prop-types';

import styles from './AddMoreBtn.module.css';
import AddIcon from 'src/assets/add.svg';

const size = 16;

function AddMoreBtn({ onClick }) {
  return (
    <button className={styles.addMoreBtn} onClick={onClick}>
      <img src={AddIcon} alt="Add sign" height={size} width={size} />
      Add more
    </button>
  );
}

AddMoreBtn.propTypes = {
  onClick: PropTypes.func,
};

export default AddMoreBtn;
