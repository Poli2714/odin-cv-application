import { Button } from 'src/components/buttons';
import styles from './DownloadBtn.module.css';
import DownloadIcon from 'src/assets/download.svg';

const size = 24;

function DownloadBtn() {
  return (
    <Button clName={styles.downloadBtn}>
      <img src={DownloadIcon} alt="Download icon" width={size} height={size} />
      Download
    </Button>
  );
}

export default DownloadBtn;
