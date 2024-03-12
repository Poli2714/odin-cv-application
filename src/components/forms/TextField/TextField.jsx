import PropTypes from 'prop-types';

import styles from './TextField.module.css';

function TextArea({
  autofocus = false,
  maxLength,
  name,
  onChange,
  placeholder = '',
  rows,
  value,
}) {
  return (
    <textarea
      autoFocus={autofocus}
      className={`${styles.textField} ${styles.textarea}`}
      id={name}
      maxLength={maxLength}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      value={value}
    ></textarea>
  );
}

TextArea.propTypes = {
  autofocus: PropTypes.bool,
  maxLength: PropTypes.number,
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
  value: PropTypes.string,
};

function TextInput({
  autofocus = false,
  clName = '',
  disabled = false,
  name,
  onChange,
  pattern,
  placeholder,
  value,
}) {
  return (
    <input
      autoFocus={autofocus}
      className={`${styles.textField}${clName && ' ' + clName}`}
      disabled={disabled}
      id={name}
      name={name}
      onChange={onChange}
      pattern={pattern}
      placeholder={placeholder}
      type="text"
      value={value}
    />
  );
}

TextInput.propTypes = {
  autofocus: PropTypes.bool,
  clName: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
  pattern: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

export { TextInput, TextArea };
