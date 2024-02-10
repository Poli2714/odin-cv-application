export default function Textarea({ label, labelFor, placeholder, rows }) {
  return (
    <div className="input-wrapper">
      <label htmlFor={labelFor} className="input-wrapper__label-name">
        {label}
      </label>
      <textarea
        id={labelFor}
        name={labelFor}
        placeholder={placeholder}
        rows={rows}
        className="input-wrapper__input"
      ></textarea>
    </div>
  );
}
