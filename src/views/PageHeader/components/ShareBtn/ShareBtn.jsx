import { Button } from 'src/components/buttons';
import styles from './ShareBtn.module.css';
import ShareIcon from 'src/assets/share.svg';

const size = 24;

function ShareBtn() {
  return (
    <Button clName={styles.shareBtn}>
      <>
        <img src={ShareIcon} alt="Share icon" width={size} height={size} />
        Share
      </>
    </Button>
  );
}

export default ShareBtn;
