import '../styles/CVEditPanel.css';
import CloseIcon from '../assets/close.svg';

function CloseBtn({ onClosePanel }) {
  return (
    <button className="cv-edit-panel__close-btn" onClick={onClosePanel}>
      <img src={CloseIcon} alt="Close icon" height={24} width={24} />
    </button>
  );
}

export default function CVEditPanel({ onClosePanel, children }) {
  return (
    <div className="cv-edit-panel">
      <CloseBtn onClosePanel={onClosePanel} />
      {children}
    </div>
  );
}
