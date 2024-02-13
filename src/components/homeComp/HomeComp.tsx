import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from './_HomeComp.module.scss';

// Importa tus imágenes
import img01 from '../../assets/Images/Slider/12.jpg';
import img02 from '../../assets/Images/Slider/2.jfif';
import img03 from '../../assets/Images/Slider/3.jfif';
import img04 from '../../assets/Images/Slider/4.jfif';
import img05 from '../../assets/Images/Slider/5.jfif';
import img06 from '../../assets/Images/Slider/6.jfif';
import img07 from '../../assets/Images/Slider/7.jfif';
import img08 from '../../assets/Images/Slider/8.jfif';
import img09 from '../../assets/Images/Slider/9.jfif';
import img10 from '../../assets/Images/Slider/10.jfif';
import img11 from '../../assets/Images/Slider/11.jfif';

const HomeComp = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 11);
    }, 3000); // Cambia a la siguiente imagen cada 3 segundos

    return () => clearInterval(interval);
  }, []); // Se ejecuta solo una vez al montar el componente

  // Define un arreglo con las imágenes
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
          {images.map((image, index) => (
            <div
              className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
              key={index}
            >
              <img
                src={image}
                alt=""
                className={styles.img}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeComp;
