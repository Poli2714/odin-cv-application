import PropTypes from 'prop-types';

import styles from './RemoveBtn.module.css';

const removeIconSVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    role="img"
  >
    <path
      d="M6.31706 22C5.74958 22 5.26625 21.8004 4.86705 21.4012C4.46788 21.002 4.26829 20.5187 4.26829 19.9512V4.24392H3V2.97563H8.07316V2H15.6829V2.97563H20.7561V4.24392H19.4878V19.9512C19.4878 20.535 19.2923 21.0224 18.9012 21.4134C18.5101 21.8045 18.0227 22 17.439 22H6.31706ZM18.2195 4.24392H5.53658V19.9512C5.53658 20.1789 5.60975 20.3659 5.75609 20.5122C5.90243 20.6585 6.08942 20.7317 6.31706 20.7317H17.439C17.6341 20.7317 17.813 20.6504 17.9756 20.4878C18.1382 20.3252 18.2195 20.1463 18.2195 19.9512V4.24392ZM9.09753 18.1951H10.3659V6.78051H9.09753V18.1951ZM13.3902 18.1951H14.6585V6.78051H13.3902V18.1951Z"
      fill="#333333"
    />
  </svg>
);

function RemoveBtn({ disabled, onClick }) {
  return (
    <button className={styles.removeBtn} disabled={disabled} onClick={onClick}>
      {removeIconSVG}
      Remove
    </button>
  );
}

RemoveBtn.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default RemoveBtn;
