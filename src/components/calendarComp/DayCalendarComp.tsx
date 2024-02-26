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
  
  //define los horaros del primer rango de turnos
  const definedStartHour1 = 9
  const definedStartMinutes1 = 20
  const definedEndHour1 = 13;
  const definedEndMinutes1 = 40
  const definedTimeSlot1 = 20
  const startTime1 = (+definedStartHour1 * 60) + definedStartMinutes1
  const endTime1 = (definedEndHour1 * 60) + definedEndMinutes1

  //define los horaros del segundo rango de turnos
  const definedStartHour2 = 16
  const definedStartMinutes2 = 0
  const definedEndHour2 = 20;
  const definedEndMinutes2 = 40
  const definedTimeSlot2 = 20
  const startTime2 = (+definedStartHour2 * 60) + definedStartMinutes2
  const endTime2 = (definedEndHour2 * 60) + definedEndMinutes2
  
  // Genera un arreglo de horas y minutos del rango seleccionado
  const calcSlotsGroup = (startTime, endTime, slotTime) => {
    const array = Array.from({ length: (endTime - startTime) / slotTime }, (_, index) => {
      const totalMinutes = startTime + index * slotTime;
      const hour = (Math.floor(totalMinutes / 60));
      const minute = (totalMinutes % 60);
      
      return (`${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`);
    })
    return array
  }

  // Se crean los dos rangos de turno
  const timeSlots1 = calcSlotsGroup(startTime1, endTime1, definedTimeSlot1)
  const timeSlots2 = calcSlotsGroup(startTime2, endTime2, definedTimeSlot2)
  
  // Determina los minutos finales del rango de trunos 
  // const endOfGroup = (timeGroup, definedTimeSlot) => {

  //   const startLastSlotOfGroup = timeGroup[timeGroup.length-1]
  //   const [hourString, minuteString] = startLastSlotOfGroup.split(":");
  //   const endGroupMinutes = (+parseInt(hourString) * 60) + parseInt(minuteString) + definedTimeSlot;
  //   console.log('hourString: ', hourString)
  //   console.log('minuteString: ', minuteString)
  //   console.log(endGroupMinutes)

  //   return endGroupMinutes
  // }

  // Se calculan los fines de grupo en minutos
  // const endOfGroup1 = endOfGroup(timeSlots1, definedTimeSlot1)
  // const endOfGroup2 = endOfGroup(timeSlots2, definedTimeSlot2)

  // constante para validar la renderización del segudno grupo
  let isSecondStart = false;

  // Verivica las condiciones para mostrar el segundo rango de turnos
  // que el inicio del segundo no sea menor que el fin del primero
  // if(endOfGroup2 && endOfGroup1 && startTime2 < endOfGroup1) return alert('El segundo bloque de turnos no puede iniciar antes del fin del primero.')
  // // que la hora final del segundo rango de turnos no sea mayor a las 24:00
  // if(endOfGroup2 && endOfGroup1 && endOfGroup2 > (24*60)) return alert('Los turnos no pueden finalizar después de la hora 24:00.')

  isSecondStart = true
  
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
      <h2>Horarios:</h2>
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
