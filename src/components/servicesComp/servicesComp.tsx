import styles from './_servicesComp.module.scss';
import imgPPP01 from '../../Assets/Images/services/PerfParaProduccion/perfoProd01.png'
import imgPPP02 from '../../Assets/Images/services/PerfParaProduccion/perfoProd02.jpg'
import imgPGC01 from '../../Assets/Images/services/PerfParaGradeControl/perfoGradecontrol01.jpg'
import imgPGC02 from '../../Assets/Images/services/PerfParaGradeControl/perfoGradecontrol02.jpg'
import imgPGC03 from '../../Assets/Images/services/PerfParaGradeControl/perfoGradecontrol03.jpg'
import imgPPC01 from '../../Assets/Images/services/PerfParaConstruccion/perfoBuilding01.jpg'
import imgPPC02 from '../../Assets/Images/services/PerfParaConstruccion/perfoBuilding02.jpg'
import imgBlasting01 from '../../Assets/Images/services/Voladura/blasting01.jpg'
import imgBlasting02 from '../../Assets/Images/services/Voladura/blasting02.jpg'
import imgBlasting03 from '../../Assets/Images/services/Voladura/blasting03.jpg'
import imgPD01 from '../../Assets/Images/services/PreDrilling/preDrilling01.jpg'
import imgPD02 from '../../Assets/Images/services/PreDrilling/preDrilling02.jpg'
import imgPD03 from '../../Assets/Images/services/PreDrilling/preDrilling03.jpg'

const ServicesComp = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mainImage}>
      </div>
      <div className={styles.mainText}>
      <h1 className={styles.title}>EXPLOSERVICE - ADL S.R.L.</h1>
        <p>
          En Exploservice ADL nos dedicamos a brindar soluciones en el campo de la perforación para voladuras, aplicadas para la exploración y explotación en minería y excavaciones para construcción.
        </p>
        <p>
          Contamos con una vasta experiencia de más de 25 años y un equipo especializado, altamente comprometido con el desarrollo de procesos de mejora continua, garantizando el cumplimiento de los objetivos con altos estándares de calidad, seguridad y cuidando el medio ambiente.
        </p>
      </div>
      <h2 className={styles.our}>Nuestros servicios</h2>
      <div className={styles.allServicesContainer}>
        <div className={styles.serviceContainer}>
          <h3>PERFORACIÓN PARA PRODUCCION</h3>
          <div className={styles.serviceContent}>
            <p>Perforación de taladros con equipo top hammer o DTH, siguiendo un patrón o grilla preestablecido que luego serán cargados con explosivo para su posterior detonación.</p>
            <div className={styles.serviceImgs}>
              <img src={imgPPP01} alt="imgPPP01" />
              <img src={imgPPP02} alt="imgPPP02" />
            </div>
          </div>
        </div>
        <div className={styles.serviceContainer}>
          <h3>PERFORACIÓN PARA GRADE CONTROL</h3>
        <div className={styles.serviceContent}>
          <p>Perforación con toma de muestras del cutting o detritus, con o sin empleo de dispositivo cuarteador.</p>
          <div className={styles.serviceImgs}>
            <img src={imgPGC01} alt="imgPGC01" />
            <img src={imgPGC02} alt="imgPGC02" />
            <img src={imgPGC03} alt="imgPGC03" />
          </div>
        </div>
        </div>
        <div className={styles.serviceContainer}>
          <h3>PERFORACIÓN PARA CONSTRUCCION</h3>
          <div className={styles.serviceContent}>
          <p>Perforación para excavaciones con explosivos en construcción; cortes cajón y media ladera para rutas, rip-rap, zanjeos, fundaciones, demoliciones, voladuras especiales, etc.</p>
          <div className={styles.serviceImgs}>
            <img src={imgPPC01} alt="imgPPP01" />
            <img src={imgPPC02} alt="imgPPP02" />
          </div>
          </div>
        </div>
        <div className={styles.serviceContainer}>
          <h3>VOLADURA</h3>
          <div className={styles.serviceContent}>
          <p>Carguío de pozos con explosivos y detonación para la obtención de roca fragmentada en diferentes granulometrías según su posterior utilización.</p>
          <div className={styles.serviceImgs}>
            <img src={imgBlasting01} alt="imgPPP01" />
            <img src={imgBlasting02} alt="imgPPP02" />
            <img src={imgBlasting03} alt="imgPPP03" />
          </div>
          </div>
        </div>
        <div className={styles.serviceContainer}>
          <h3>PRE DRILLING</h3>
          <div className={styles.serviceContent}>
          <p>Perforación de taladros sin extracción de cutting para facilitar el hincado de perfiles estructurales para el emplazamiento de parques solares.</p>
          <div className={styles.serviceImgs}>
            <img src={imgPD01} alt="imgPPP01" />
            <img src={imgPD02} alt="imgPPP02" />
            <img src={imgPD03} alt="imgPPP03" />
          </div>
          </div>
        </div>
      </div>
        <div className={styles.toolsContainer}>
          <h2 className={styles.toolsTitle}>
            Herramientas, preceptos, reglamentarios y procedimientos implementados en todos nuestros servicios en el país.
          </h2>
          <h3>
            Fábrica de explosivos y provisión de accesorios, certificación de calidad - Leyes termoquímicas.
          </h3>
          <div className={styles.arrow}></div>
          <h3>
            Selección de explosivo, según proyectos. Transporte según leyes vigentes - Polvorines.
          </h3>
          <div className={styles.arrow}></div>
          <h3>
            In situ
          </h3>
          <div className={styles.arrow}></div>
          <h3>
            * Génesis del yacimiento - Geología estructural.<br/>
            * Mineralogía - Microfisuración.<br/>
            * Petrografía y petrología. <br/>
            * Ensayos resistentes.<br/>
            * Proyección futura del yacimiento.
          </h3>
          <div className={styles.separator}></div>
          <h2 className={styles.toolsTitle}>
            Diseño energético y geométrico
          </h2>
          <h3>
            ARRANCAR &rarr; FRAGMENTAR &rarr; LANZAR
          </h3>
          <div className={styles.arrow}></div>
          <h3>
            TREN DE PERFORACION - PERFORABILIDAD - FACTOR DE ROCA
          </h3>
          <div className={styles.arrow}></div>
          <h3>
            RESPUESTAS ECONOMICAS
          </h3>
          <div className={styles.shortSeparator}></div>
          <p>
            Cuando se trata de hacer aplicaciones, de energía y diagramas de perforaciones geométricas, hemos recurrido a la Escuela Europea y utilizar empírico solo para supervisión y campo.
          </p>
          <p>
            La mecánica y la termidinámica de las voladuras en cargas idénticas, producirán resultados diferentes; por ejemplo en: caliza, pizarra, arenisca, andesita, riolita, cuarcita, gneis, dolomitas, basaltos, skarn, taconita, etc, etc. Por ello la figura del jefe de disparo, debe ser entrenado específicamente, en físico-química y geología estructural.
          </p>
          <p>
            Esta síntesis de procedimientos, como prueba de los servicios fue probado en FRAGMENTACIÓN, en los alrededores de San Juan como La Laja, Los Berror y Jáchal. Los resultados fueron satisfactorios, como se esperaba por contar San Juan, con calizas, dolomitas y dolomías de calidad y homogeneidad, como pocas en el mundo. También se perfecconó la utilización de un amonal, camiando el diámetro, ajustando el taco, ampliando la grilla, usando remolcadores de ondas con aumento de confinamiento. Se llegó a comprobar, que se lograban velocidades de detonación de 4200m/seg. La cual se coloca en como explosivo pulverulento. Este se utilizó con éxito en proyectos como Lindero (Salta) y Gualcamayo (San Juan - Jáchal) gasoductos neuquinos y RN 150 incluido sus túneles, acueductos San Luis, entre otros.
          </p>
        </div>

    </div>
  )
}

export default ServicesComp
