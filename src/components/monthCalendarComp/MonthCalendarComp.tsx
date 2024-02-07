import React, { useState } from 'react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import DayCalendarComp from '../dayCalendarComp/DayCalendarComp'; // Suponiendo que tienes un componente Day en un archivo separado

const MyCalendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Configuración del localizador de fechas
  const localizer = momentLocalizer(moment);

  // Manejar cambio de fecha en la vista de mes
  const handleMonthDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      {/* Vista de mes */}
      <Calendar
        localizer={localizer}
        events={[]} // Aquí debes pasar tus eventos
        startAccessor="start"
        endAccessor="end"
        defaultView={Views.MONTH}
        onSelectEvent={(event) => console.log(event)}
        onSelectSlot={(slotInfo) => console.log(slotInfo)}
        style={{ height: 500 }}
        onSelecting={(range) => console.log(range)}
        onNavigate={handleMonthDateChange}
        selectable  // Asegúrate de incluir el prop selectable con un valor booleano
      />

      {/* Vista de día */}
      {/* <DayCalendarComp selectedDate={selectedDate} /> */}
    </div>
  );
};

export default MyCalendar;

























// import { useState, useEffect } from "react";
// import { Calendar, Views } from "react-big-calendar";
// import { format, parse, startOfWeek, getDay, addHours, startOfHour } from 'date-fns';
// import { es as esLocale } from 'date-fns/locale'; // Importa la localización en español
// import DayPicker from "react-day-picker";
// import "react-day-picker/lib/style.css"; // Importa los estilos de DayPicker
// import "bootstrap/dist/css/bootstrap.min.css";

// export default function App() {
//   const [events, setEvents] = useState([]);
//   const [selectedDay, setSelectedDay] = useState(new Date());
//   const [year, setYear] = useState(new Date().getFullYear());
//   const [month, setMonth] = useState(new Date().getMonth());
//   const [days, setDays] = useState(new Date().getDay());

//   let myEventsList = [
//     {
//       title: "leraning",
//       start: new Date(2020, 10, 30),
//       end: new Date(2020, 10, 30),
//       allDay: false
//     },
//     {
//       title: "Long Event",
//       start: new Date(2020, 11, 1),
//       end: new Date(2020, 11, 1),
//       allDay: false
//     }
//   ];

//   useEffect(() => {
//     setEvents(myEventsList);
//   }, []);

//   const handleSelect = (eventItem) => {
//     const title = window.prompt("New Event name");
//     if (title) {
//       let data = { title: title, start: eventItem.start, end: eventItem.end };
//       setEvents((events) => [...events, data]);
//     }
//   };

//   const handleDayClick = (day, { selected }) => {
//     setSelectedDay(day);
//     setYear(day.getFullYear());
//     setMonth(day.getMonth());
//     setDays(day.getDay());
//     console.log(day);
//   };

//   const localizer = {
//     format,
//     parse,
//     startOfWeek,
//     getDay,
//     locales: {
//       'es': esLocale, // Utiliza la localización en español
//     },
//   };

//   return (
//     <div className="py-3 d-flex">
//       {/* <div className="flex-sm-column">
//         <DayPicker selected={selectedDay} onDayClick={handleDayClick} />
//       </div> */}
//       <div className="flex-sm-column">
//         <Calendar
//           selectable
//           localizer={localizer}
//           events={events}
//           startAccessor="start"
//           endAccessor="end"
//           onSelectSlot={handleSelect}
//           onSelectEvent={(event) => alert(event.title)}
//           defaultView={Views.WEEK}
//           defaultDate={new Date(year, month, days)}
//           style={{ height: 500 }}
//         />
//       </div>
//     </div>
//   );
// }
















// import { FC, useState } from 'react'
// import { Calendar, dateFnsLocalizer, Event } from 'react-big-calendar' //Esto es para utilizar el calendario y sus funcionalidades.
// import withDragAndDrop, { withDragAndDropProps } from 'react-big-calendar/lib/addons/dragAndDrop' //Estos son para agregar funcionalidad de arrastrar y soltar al calendario.
// import format from 'date-fns/format' //Es una función para formatear fechas.
// import parse from 'date-fns/parse' //Es una función para analizar cadenas de fecha y convertirlas en objetos de fecha.
// import startOfWeek from 'date-fns/startOfWeek' //Es una función para obtener el primer día de la semana.
// import getDay from 'date-fns/getDay' //Es una función para obtener el día de la semana.
// import esLocate from 'date-fns/locale/es' //Proporciona localización en inglés para las fechas.
// import addHours from 'date-fns/addHours' //Es una función para agregar horas a una fecha.
// import startOfHour from 'date-fns/startOfHour' //Es una función para obtener el comienzo de la hora.

// import 'react-big-calendar/lib/addons/dragAndDrop/styles.css' // Importa el archivo CSS de estilos para la funcionalidad de arrastrar y soltar del calendario.
// import 'react-big-calendar/lib/css/react-big-calendar.css' //Importa el archivo CSS de estilos para el calendario en sí.

// const MyCalendar: FC = () => {
//   const [events, setEvents] = useState<Event[]>([
//     {
//       title: 'Learn cool stuff',
//       start,
//       end,
//     },
//   ])

//   const onEventResize: withDragAndDropProps['onEventResize'] = data => {
//     const { start, end } = data

//     setEvents(currentEvents => {
//       const firstEvent = {
//         start: new Date(start),
//         end: new Date(end),
//       }
//       return [...currentEvents, firstEvent]
//     })
//   }

//   const onEventDrop: withDragAndDropProps['onEventDrop'] = data => {
//     console.log(data)
//   }

//   return (
//     <DnDCalendar
//       defaultView='week'
//       events={events}
//       localizer={localizer}
//       onEventDrop={onEventDrop}
//       onEventResize={onEventResize}
//       resizable
//       style={{ height: '100vh' }}
//     />
//   )
// }

// const locales = {
//   'es': esLocate,
// }
// const endOfHour = (date: Date): Date => addHours(startOfHour(date), 1)
// const now = new Date()
// const start = endOfHour(now)
// const end = addHours(start, 2)
// //The types here are `object`. Strongly consider making them better as removing `locales` caused a fatal error
// const localizer = dateFnsLocalizer({
//   format,
//   parse,
//   startOfWeek,
//   getDay,
//   locales,
// })
// //@ts-ignore
// const DnDCalendar = withDragAndDrop(Calendar)

// export default MyCalendar