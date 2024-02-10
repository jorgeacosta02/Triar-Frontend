// import React from 'react';
// import 'react-big-calendar/lib/css/react-big-calendar.css';

// interface DayProps {
//   selectedDate: Date;
//   onTimeSelection: (hour: number, minute: number) => void;
// }

// const DayCalendarComp: React.FC<DayProps> = ({ selectedDate, onTimeSelection }) => {
//   // Genera un arreglo de horas y minutos del día seleccionado
//   const startTime = 8 * 60; // 8 am en minutos
//   const endTime = 20 * 60; // 8 pm en minutos

//   const timeSlots = Array.from({ length: (endTime - startTime) / 15 }, (_, index) => {
//     const totalMinutes = startTime + index * 15;
//     const hour = Math.floor(totalMinutes / 60);
//     const minute = totalMinutes % 60;
//     return { hour, minute };
//   });

//   const handleTimeClick = (hour: number, minute: number) => {
//     onTimeSelection(hour, minute);
//   };

//   return (
//     <div>
//       <h2>Calendario del Día</h2>
//       <ul>
//         {timeSlots.map(({ hour, minute }) => (
//           <li key={`${hour}:${minute}`}>
//             <button onClick={() => handleTimeClick(hour, minute)}>
//               {`${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default DayCalendarComp;




























import React, {useState} from 'react';
import { ISelectedDate } from './CalendarComp';
import styles from './_DayCalendarComp.module.scss'


interface IDayProps {
  selectedDate: ISelectedDate;
}


const DayCalendarComp: React.FC<IDayProps> = ({selectedDate}) => {
  
  const [selectedCompleteDate, setSelectedCompleteDate] = useState(null)
  console.log('selectedDate: ', selectedDate)
  

  const definedStartHour1 = 9
  const definedStartMinutes1 = 40
  const definedEndHour1 = 13;
  const definedEndMinutes1 = 40
  const definedTimeSlot1 = 20
  // Genera un arreglo de horas y minutos del día seleccionado
  const startTime1 = (+definedStartHour1 * 60) + definedStartMinutes1; // 8 am en minutos
  const endTime1 = (definedEndHour1 * 60) + definedEndMinutes1; // 8 pm en minutos
    
  const timeSlots1 = Array.from({ length: (endTime1 - startTime1) / definedTimeSlot1 }, (_, index) => {
    const totalMinutes = startTime1 + index * definedTimeSlot1;
    const hour = (Math.floor(totalMinutes / 60));
    const minute = (totalMinutes % 60);
    
    return (`${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`);
  });
  
  const startLastSlotOfFirtsGroup = timeSlots1[timeSlots1.length-1]
  const [hourString, minuteString] = startLastSlotOfFirtsGroup.split(":");
  const endFirstGroup = (+parseInt(hourString) * 60) + parseInt(minuteString) + definedTimeSlot1;
  console.log('hourString: ', hourString)
  console.log('minuteString: ', minuteString)
  console.log(endFirstGroup)


  // Construir una nueva fecha con la misma fecha que la actual pero con las horas y minutos dados
  // const dateConverter = (timeString) => {
  //   const [hourString, minuteString] = timeString.split(":");
  //   const hour = parseInt(hourString, 10);
  //   const minute = parseInt(minuteString, 10);
    
  //   // Obtener la fecha actual
  //   const currentDate = new Date();

  //   const date = new Date(
  //     currentDate.getFullYear(),    // Año actual
  //     currentDate.getMonth(),       // Mes actual
  //     currentDate.getDate(),        // Día actual
  //     hour,                        // Horas
  //     minute,                      // Minutos
  //     0,                           // Segundos (0)
  //     0                            // Milisegundos (0)
  //   );
      
  //   return date;
  // }

  // const startLastSlotOfFirtsGroup = dateConverter(timeSlots1[timeSlots1.length-1])
  // console.log('startLastSlotOfFirtsGroup: ', startLastSlotOfFirtsGroup)

  // const addSlotToTime = (date) => {

  //   const currentMinutes = date.getMinutes(); // Obtener los minutos actuales
  //   const newMinutes = currentMinutes + 20; // Sumar 20 minutos

  //   // Si la suma de minutos excede 59, ajustar las horas y los minutos
  //   if (newMinutes > 59) {
  //       const currentHours = date.getHours(); // Obtener las horas actuales
  //       const newHours = currentHours + Math.floor(newMinutes / 60); // Sumar horas
  //       const adjustedMinutes = newMinutes % 60; // Calcular los minutos ajustados

  //       date.setHours(newHours); // Establecer las nuevas horas
  //       date.setMinutes(adjustedMinutes); // Establecer los nuevos minutos
  //     } else {
  //       date.setMinutes(newMinutes); // Establecer solo los nuevos minutos si no hay cambio de hora
  //     }
  //     console.log(date); // Imprimir el resultado
  //     return date
  // }

  // const endLastSlotOfFirtsGroup = addSlotToTime(startLastSlotOfFirtsGroup)

  
  const definedStartTime2 = 16;
  const definedEndTime2 = 20;
  const definedTimeSlot2 = 20;
  const startTime2 = definedStartTime2 * 60; // 8 am en minutos
  console.log('startTime2: ', startTime2)
  const endTime2 = (definedEndTime2 - 1) * 60; // 8 pm en minutos
  

  let isSecondStart = false;
  
  const timeSlots2 = Array.from({ length: (endTime2 - startTime2) / 15 }, (_, index) => {
    const totalMinutes = startTime2 + index * definedTimeSlot2;
    const hour = (Math.floor(totalMinutes / 60));
    const minute = (totalMinutes % 60);

    return (`${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`);
  });

  const handleSlotClick = (selectedTimeSlot: string) => {

    if(!selectedDate) return alert('Debe seleccionar un día.')

    console.log('Intervalo de tiempo seleccionado: ', selectedTimeSlot);

    if(selectedDate)
      setSelectedCompleteDate ({
        year:selectedDate.year,
        month:selectedDate.month,
        dayOfWeek:selectedDate.dayOfWeek,
        day:selectedDate.day,
        hour:selectedTimeSlot
      })
  }

  console.log('selectedCompleteDate: ', selectedCompleteDate)

  return (
    <div className={styles.container}>
      <h2>Calendario</h2>
      <ul>
        {timeSlots1.map(slot => (
          <li
            className={styles.slot}
            key={slot}
            onClick={() => handleSlotClick(slot)}
          >
            {slot}
          </li>
        ))}
      </ul>
      <ul>
        {isSecondStart && timeSlots2.map(slot => (
          <li
            className={styles.slot}
            key={slot}
            onClick={() => handleSlotClick(slot)}
          >
            {slot}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DayCalendarComp;
