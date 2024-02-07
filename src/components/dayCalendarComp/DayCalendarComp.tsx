import React from 'react';

interface DayProps {
  selectedDate: Date;
}

const DayCalendarComp: React.FC<DayProps> = () => {
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
