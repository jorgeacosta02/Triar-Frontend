import styles from './_landing.module.scss'
import { NavLink } from 'react-router-dom'
import LogoBrand from '../../Assets/Images/Logos&Brands/ExploserviceLogoBrand.png'
import ADLLogo from '../../Assets/Images/Logos&Brands/ADLLogo2.png'


const LandingPage = () => {
  return (
    <div>
      <div className={styles.esadlbg}></div>
      <div className={styles.esadlLinkContainer}>
        <NavLink to='/company' className={styles.navLink}>
          <img
            src={LogoBrand}
            alt="Exploservice Logo"
            // className={styles.ESlogobrand}
            />
          <img
            src={ADLLogo}
            alt="ADL Logo"
            // className={styles.ADLLogo}
            />
        </NavLink>
      </div>
      {/* <div className={styles.eabg}></div>
      <div className={styles.eaLinkContainer}>
        <NavLink to='/exploagro' className={styles.navLink}>
            <img
              src={EALogo}
              alt="Exploagro Logo"
              // className={styles.EAlogobrand}
              />
        </NavLink>
      </div> */}
    </div>
  )
}

export default LandingPage

