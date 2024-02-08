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




























import React from 'react';
import 'react-big-calendar/lib/css/react-big-calendar.css';

interface DayProps {
  selectedDate: Date;
}

const DayCalendarComp: React.FC<DayProps> = ({selectedDate}) => {
  // Genera un arreglo de horas y minutos del día seleccionado
  const startTime = 8 * 60; // 8 am en minutos
  const endTime = 20 * 60; // 8 pm en minutos

  const timeSlots = Array.from({ length: (endTime - startTime) / 15 }, (_, index) => {
    const totalMinutes = startTime + index * 15;
    const hour = Math.floor(totalMinutes / 60);
    const minute = totalMinutes % 60;
    return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
  });

  return (
    <div>
      <h2>Calendario</h2>
      <ul>
        {timeSlots.map(slot => (
          <li key={slot}>
            {slot}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DayCalendarComp;
