import styles from './_HomeComp.module.scss';
import img01 from '../../assets/Images/Slider/12.jpg'
import img02 from '../../assets/Images/Slider/2.jfif'
import img03 from '../../assets/Images/Slider/3.jfif'
import img04 from '../../assets/Images/Slider/4.jfif'
import img05 from '../../assets/Images/Slider/5.jfif'
import img06 from '../../assets/Images/Slider/6.jfif'
import img07 from '../../assets/Images/Slider/7.jfif'
import img08 from '../../assets/Images/Slider/8.jfif'
import img09 from '../../assets/Images/Slider/9.jfif'
import img10 from '../../assets/Images/Slider/10.jfif'
import img11 from '../../assets/Images/Slider/11.jfif'
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';


const HomeComp = () => {

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Cambia a la siguiente imagen cada 3 segundos (ajusta según tus necesidades)
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 11);
    }, 3000); // Intervalo de 3 segundos
    return () => clearInterval(interval);
  }, []); // Se ejecuta solo una vez al montar el componente

  console.log(currentSlide)

  const userAuthCompleteReducer = useSelector((state: any) => state.userAuth);
  console.log('userAuthCompleteReducer.data :', userAuthCompleteReducer.data);
  console.log('company');

  const images = [
    img01,
    img02,
    img03,
    img04,
    img05,
    img06,
    img07,
    img08,
    img09,
    img10,
    img11
  ];

  return (
    <div className={styles.container}>
      <div className={styles.sliderContainer}>
        <div className={styles.slider}>
          <div className={styles.slide}>
            <img src={images[currentSlide]} alt="" />
          </div>
          {/* <div className={styles.slide}>
            <img src={img02} alt="" />
          </div>
          <div className={styles.slide}>
            <img src={img03} alt="" />
          </div>
          <div className={styles.slide}>
            <img src={img04} alt="" />
          </div>
          <div className={styles.slide}>
            <img src={img05} alt="" />
          </div>
          <div className={styles.slide}>
            <img src={img06} alt="" />
          </div>
          <div className={styles.slide}>
            <img src={img07} alt="" />
          </div>
          <div className={styles.slide}>
            <img src={img08} alt="" />
          </div>
          <div className={styles.slide}>
            <img src={img09} alt="" />
          </div>
          <div className={styles.slide}>
            <img src={img10} alt="" />
          </div>
          <div className={styles.slide}>
            <img src={img11} alt="" />
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default HomeComp
