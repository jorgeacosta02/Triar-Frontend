import styles from './_jobsComp.module.scss'
import imgCasposo from '../../Assets/Images/jobs/casposo01.jpg'
import imgKarouni from '../../Assets/Images/jobs/minaKaroniGuyana.jpg'
import imgPacsuaLama01 from '../../Assets/Images/jobs/pascuaLama01.jpg'
import imgPacsuaLama02 from '../../Assets/Images/jobs/pascuaLama02.jpg'


const JobsComp = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.our}>Nuestros trabajos</h2>
      <div className={styles.worksContainer}>
        <div className={styles.work}>
            <h3>
                MIMA CASPOSO - ARGENTINA
            </h3>
            <div className={styles.workData}>
                <div className={styles.workText}>
                    <p>
                        Mina Casposo ubicada en el departamento de Calingasta - Provincia de San Juan - Argentina.
                    </p>
                    <p>
                        Perforación, carga y voladura en roca andesita con grade control de cutting en mineral. Volumen total: 7.050.000 Ton. 
                    </p>
                    <p>
                        Contrato: desde 2011 al 2014.
                    </p>
                </div>
                <img src={imgCasposo} alt='Imagen Casposo' />
            </div>
        </div>
        <div className={styles.work}>
            <h3>
               MIMA KAROUNI - GUYANA
            </h3>
            <div className={styles.workData}>
                <img src={imgKarouni} alt='Imagen Karoni' />
                <div className={styles.workText}>
                    <p>
                        Mina Karouni locaclizada en la región de Esequibo de la república de Guyana.
                    </p>
                    <p>
                        Exploservice provee servicios de perforación carga y voladura en saprolita y roca, con grade control de cutting en mineral.
                    Cantidad total: 900.000 metros lineales de perforación.
                    </p>
                    <p>
                        Contrato: desde 2015 a la actualidad.
                    </p>
                </div>
            </div>
        </div>
        <div className={styles.work}>
            <h3>
                PROYECTO BINACIONAL PASCUA LAMA - ARGENTINA CHILE
            </h3>
            <div className={styles.workData}>
                <div className={styles.workText}>
                    <p>
                        Proyecto binacional Pascua Lama ubicado en el departamento de Iglesia - Provincia de San Juan - Argentina.
                    </p>
                    <p>
                        Carga y voladura con explosivos para excavación subterránea en tunel conveyor, lado argentino.
                    </p>
                    <p>
                        Período 2012 y 2013.
                    </p>
                </div>
                <img src={imgPacsuaLama01} alt='Imagen Pascua Lama 01' />
            </div>
        </div>
        <div className={styles.work}>
            <h3>
                PROYECTO BINACIONAL PASCUA LAMA - ARGENTINA CHILE
            </h3>
            <div className={styles.workData}>
                <img src={imgPacsuaLama02} alt="Imagen Pascua Lama 02" />
                <div className={styles.workText}>
                    <p>
                        Proyecto binacional Pascua Lama ubicado en el departamento de Iglesia - Provincia de San Juan - Argentina.
                    </p>
                    <p>
                        Transporte, carga y voladura con explosivos para excavación dique de colas.
                    </p>
                    <p>
                        Período 2012 y 2013.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default JobsComp
