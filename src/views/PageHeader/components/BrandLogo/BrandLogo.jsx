import styles from './BrandLogo.module.css';
import Logo from 'src/assets/brand-logo.svg';

const size = 50;

function BrandLogo() {
  return (
    <div data-testid="brand-logo" className={styles.brand}>
      <img src={Logo} alt="MEK brand logo" width={size} height={size} />
      <h1 className={styles.brandLogo}>MEK</h1>
    </div>
  );
}

export default BrandLogo;
