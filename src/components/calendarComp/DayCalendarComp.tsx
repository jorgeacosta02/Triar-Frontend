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
import 'react-big-calendar/lib/css/react-big-calendar.css';

interface IDayProps {
  selectedDate: ISelectedDate;
}

// interface ISelectedCompleteDate<ISelectedDate> {
//   hour:string,
//   minute:string
// }


const DayCalendarComp: React.FC<IDayProps> = ({selectedDate}) => {
  
  const [selectedCompleteDate, setSelectedCompleteDate] = useState({})
  console.log('selectedDate: ', selectedDate)

  // Genera un arreglo de horas y minutos del día seleccionado
  const startTime = 8 * 60; // 8 am en minutos
  const endTime = 20 * 60; // 8 pm en minutos

  const timeSlots = Array.from({ length: (endTime - startTime) / 15 }, (_, index) => {
    const totalMinutes = startTime + index * 15;
    const hour = (Math.floor(totalMinutes / 60)).toString().padStart(2, '0');
    const minute = (totalMinutes % 60).toString().padStart(2, '0');

    return (`${hour}:${minute}`);
  });


  const handleSlotClick = (selectedTimeSlot: string) => {
    console.log('Intervalo de tiempo seleccionado: ', selectedTimeSlot);
    // Aquí puedes hacer lo que necesites con el intervalo de tiempo seleccionado
    
    // const handleSlotClick = (selectedDate) => {
      
      //   console.log('selectedDate in handleSlotClick: ', selectedDate)
      
      if(selectedDate)
        setSelectedCompleteDate ({
          year:selectedDate.year,
          month:selectedDate.month,
          dayOfWeek:selectedDate.dayOfWeek,
          day:selectedDate.day,
          hour:selectedTimeSlot
        }
      )
  }

  console.log('selectedCompleteDate: ', selectedCompleteDate)

  return (
    <div>
      <h2>Calendario</h2>
      <ul>
        {timeSlots.map(slot => (
          <li
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
