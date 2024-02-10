import '../../styles/forms/InputElem.css';

export default function InputElem({ label, labelFor, type, placeholder }) {
  return (
    <div className="input-wrapper">
      <label htmlFor={labelFor} className="input-wrapper__label-name">
        {label}
      </label>
      <input
        type={type}
        name={labelFor}
        id={labelFor}
        placeholder={placeholder}
        className="input-wrapper__input"
      />
    </div>
  );
}
