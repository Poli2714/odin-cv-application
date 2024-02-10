import '../../styles/forms/AddMoreBtn.css';
import AddIcon from '../../assets/add.svg';

export default function AddMoreBtn() {
  return (
    <button className="cv-edit-panel__add-more-btn">
      <img src={AddIcon} alt="Add sign" height={16} width={16} />
      Add one more
    </button>
  );
}
