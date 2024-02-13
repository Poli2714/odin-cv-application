import '../../styles/forms/CharacterLimit.css';

export default function CharacterLimit({ text, limit, children }) {
  const textLength = text.length;

  return (
    <div className="textarea-charlimit-container">
      <span className="character-limit">
        {textLength} / {limit}
      </span>
      {children}
    </div>
  );
}
