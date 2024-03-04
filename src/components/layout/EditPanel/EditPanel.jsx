import { useContext } from 'react';
import PropTypes from 'prop-types';

import { CloseBtn } from 'src/components/buttons';
import { IndexContext } from 'src/hooks/Contexts';
import styles from './EditPanel.module.css';

function EditPanel({ children }) {
  const { setActiveIndex } = useContext(IndexContext);

  return (
    <div data-testid="edit-panel" className={styles.editPanel}>
      <CloseBtn onClick={() => setActiveIndex(null)} />
      {children}
    </div>
  );
}

EditPanel.propTypes = {
  children: PropTypes.node,
};

export default EditPanel;
