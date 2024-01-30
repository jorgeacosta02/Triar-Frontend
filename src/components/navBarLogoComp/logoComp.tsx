import styles from './_LogoComp.module.scss';
import ESLogoImg from '../../Assets/Images/Logos&Brands/ExploserviceLogoBrand.png';
import ADLLogo from '../../Assets/Images/Logos&Brands/ADLLogo.png';

const LogoComp = () => {
  return (
    <div className={styles.container}>
      <img
        src={ESLogoImg}
        alt="Exploservice Logo"
        className={styles.ESLogoImg}  
      />
      <img
        src={ADLLogo}
        alt="ADL Logo"
        className={styles.ADLLogo}  
      />
    </div>
  )
}

export default LogoComp
