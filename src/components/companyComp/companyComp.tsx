import styles from './_companyComp.module.scss';
import imgTroy from '../../Assets/Images/clients/troy.png'
import imgAustralGold from '../../Assets/Images/clients/australgold.png'
import imgBarrick from '../../Assets/Images/clients/barrick.png'
import imgYamana from '../../Assets/Images/clients/yamana.png'
import imgMapal from '../../Assets/Images/clients/mapal.jpg'
import imgCartellone from '../../Assets/Images/clients/cartellone.jpg'
import imgSW from '../../Assets/Images/clients/sterling&wilson.png'
import imgMSC from '../../Assets/Images/clients/mineraSantaCruz.jpg'
import imgZlato from '../../Assets/Images/clients/zlato.jpg'
import imgAlya from '../../Assets/Images/clients/alya.png'
import imgAlPat from '../../Assets/Images/clients/alcalis_IDENTIDAD-CURVAS-2-1.png'
import imgXtrata from '../../Assets/Images/clients/xstrata_copper_logo.jpg'
import imgMASA from '../../Assets/Images/clients/minas_argentinas_s_a_logo.jpg'
import imgBajoAlum from '../../Assets/Images/clients/alumbrera.jpg'
import { useSelector } from 'react-redux';

const CompanyComp = () => {

  const userAuthCompleteReducer = useSelector((state: any) => state.userAuth);
  console.log('state.userAuth in ProtectedRoutes :', userAuthCompleteReducer.data);
  console.log('company')

  return (
    <div className={styles.container}>
      <div className={styles.mainImage}>
      </div>
      {/* <div className={styles.mainText}>
        <h1 className={styles.title}>EXPLOSERVICE - ADL S.R.L.</h1>
        <h2 className={styles.our}>Nuestros inicios</h2>
        <div className={styles.introContainer}>
          <p>
            Al hacer una introducción de Exploserivce y ADL, no debemos olvidar la experiencia absorbida en Magma Ingeniería Minera (1977), empresa de servicos formada por egresados de la Facultad de Ingeniería de la Universidad Nacional de Cuyo. Obras como Altas cumbres (Córdoba), Embalse Río Grande (Córdoba), Corpus (Misiones); entre otras como minería de Uranio y Malagueño Córdoba.
          </p>
          <p>
            Pasada la "aventura" de Malvinas, nos concuentra nuevamente en torno a la Faculatad de Ingeniería de la Universidad Nacional de San Juan, desarrollando el proyecto de Repositorio Nuclear, en Gastre.
          </p>
          <p>
            La cercanía al Instituto de Investigaciones Mineras de la U.N.S.J. y la docencia, fueron el respaldo, para un amplio catálogo de valiosas ideas, refrendadas por el ejercicio profesional de nuestra especialidad minera.
          </p>
          <p>
            Esta etapa que continúa, ininterrumpidamente, comienza con la ejecución de labores de formación de bancos y camino a botadero para Mount Isa Minerales en Bajo La Alumbrera.
          </p>
        </div>
      </div> */}
      <div className={styles.clientsContainer}>
        <h2 className={styles.our}>Nuestras instalaciones</h2>
        <p>La idea es colocar en este espacio un detalle con fotos de las instalaciones de exploserice, galón, oficinas, polvorín.</p>
      </div>
      <div className={styles.clientsContainer}>
        <h2 className={styles.our}>Nuestros clientes</h2>
        <p>
          A lo largo de nuestra trayectorio hemos prestado servicios a empresas de renombre en el ambiente minero a nivel nacional e internacional entre las que se encuentran las siguientes.
        </p>
        <div className={styles.clients}>
          <img src={imgTroy} alt="imgTroy" />
          <img src={imgAustralGold} alt="imgAustralGold" />
          <img src={imgBarrick} alt="imgBarrick" />
          <img src={imgYamana} alt="imgYamana" />
          <img src={imgMapal} alt="imgMapal" />
          <img src={imgCartellone} alt="imgCartellone" />
          <img src={imgSW} alt="imgSW" />
          <img src={imgMSC} alt="imgMSC" />
          <img src={imgZlato} alt="imgZlato" />
          <img src={imgAlya} alt="imgAlya" />
          <img src={imgAlPat} alt="imgAlPat" />
          <img src={imgXtrata} alt="imgXtrata" />
          <img src={imgMASA} alt="imgAlPat" />
          <img src={imgBajoAlum} alt="imgBAjoAlum" />
          {/* <img src={imgCNEA} alt="imgCNEA" /> */}
        </div>
        <p>Con una extensa experiencia trabajando asociados a nuestros clientes desde las etapas iniciales hasta el final de cada proyecto, ofrecemos un amplio rango de alternativas adaptándonos para cubir cada necesidad específica.</p>
      </div>
    </div>
    // Minera salta, xtrata copper, pachon sa minera, minas argentinas, bajo la alumnbrera minera alumbrera Ymad ute., comision nacional de energía atómica.
  )
}

export default CompanyComp
