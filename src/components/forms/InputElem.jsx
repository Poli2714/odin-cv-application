import '../../styles/forms/InputElem.css';

export default function InputElem({ label, labelFor, children }) {
  return (
    <div className="input-wrapper">
      <label htmlFor={labelFor} className="input-wrapper__label-name">
        {label}
      </label>
      {children}
    </div>
  );
}
