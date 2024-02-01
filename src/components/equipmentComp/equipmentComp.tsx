import styles from './_EquipmentComp.module.scss'
import frd from '../../Assets/Images/equipment/frd1200-01.png'
import atlas from '../../Assets/Images/equipment/atlas-f9-01.png'
import tamrock from '../../Assets/Images/equipment/tamrock01.png'

const EquipmentComp = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.our}>Nuestros equipos</h2>
      <div className={styles.equipmentsContainer}>
        <div className={styles.equipment}>
          <img src={frd} alt="FRD-image" />
          <div className={styles.types}>
            <p>1 x Furukawa HCR 1200 ED</p>
            <p>5 x Furukawa HCR 1200 EDII</p>
            <p>2 x Furukawa HCR 1500 EDII</p>
          </div>
        </div>
        <div className={styles.equipment}>
          <img src={atlas} alt="FRD-image" />
          <div className={styles.types}>
            <p>1 x Atlas Copci Roc F9</p>
            <p>1 x Atlas Copco Roc L8 25</p>
          </div>
        </div>
        <div className={styles.equipment}>
          <img src={tamrock} alt="Tamrock-image" />
          <div className={styles.types}>
            <p>2 x Tamrock Ranger 800-2</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EquipmentComp
