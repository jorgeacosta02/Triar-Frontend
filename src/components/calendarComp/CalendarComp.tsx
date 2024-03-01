import { useState } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import es from 'date-fns/locale/es';
import DayCalendarComp from './DayCalendarComp';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import styles from './_CalendarComp.module.scss'

const locales = {
  'es': es,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

export interface ISelectedDate {
  year:string,
  month:string,
  dayOfWeek:string,
  day:string,
}

const CalendarComp = () => {

  const selectedDays = [2,4];

  const filterDate = date => {
    // Retorna verdadero (true) si el día es martes (2) o jueves (4)
    return selectedDays.includes(getDay(date));
  };

  const [selectedDate, setSelectedDate] = useState<ISelectedDate> ();

  const handleSelectSlot = slotInfo => {
    // Extraer año, mes, día de la semana y valor correspondiente
    const year = slotInfo.start.getFullYear();
    const month = slotInfo.start.getMonth() + 1; // Sumar 1 porque los meses van de 0 a 11
    const day = slotInfo.start.getDate();
    const dayOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'][slotInfo.start.getDay()]; // Obtenemos el nombre del día de la semana
    const value = getDay(slotInfo.start);

    if(selectedDays.includes(value))  {
      setSelectedDate({
        year,
        month,
        dayOfWeek,
        day,
      })
      return (selectedDate);
    }
  };
  
  console.log(selectedDate);

  return (
    <div className={styles.container}>
      <Calendar
        className={styles.calendar}
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        style={{
          height: 500,
          width: '100%',
          maxWidth: '300px',
        }}
        views={['month']}
        selectable={true}
        dayPropGetter={(date) => {
          if (!filterDate(date)) {
            return {
              style: {
                pointerEvents: 'none',
                backgroundColor: 'grey',
              },
            };
          }
        }}
        onSelectSlot={handleSelectSlot}
      />
      <DayCalendarComp selectedDate={selectedDate} />
    </div>
  );
};

export default CalendarComp;

























// import './_CalendarComp.css'
// import React, { FC, useState } from 'react';
// import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
// import { format, parse, startOfWeek, getDay } from 'date-fns';
// import es from 'date-fns/locale/es';
// import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'
// import 'react-big-calendar/lib/css/react-big-calendar.css'
// import DayCalendarComp from './DayCalendarComp';

// const CalendarComp : FC = () => {
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [showDayCalendar, setShowDayCalendar] = useState(true);

//   const handleDayClick = (date) => {
//     setSelectedDate(new Date(date));
//     setShowDayCalendar(true);
//   };
  

//   const handleTimeSelection = (hour: number, minute: number) => {
//     console.log('Año:', selectedDate.getFullYear());
//     console.log('Mes:', selectedDate.getMonth() + 1); // Se agrega 1 porque los meses son base 0 (enero es 0)
//     console.log('Día:', selectedDate.getDate());
//     console.log('Hora:', hour);
//     console.log('Minutos:', minute);
//   };

//   return (
//     <div>
//       <div>

//       <Calendar
//         // defaultView='month'
//         selectable={true}
//         localizer={localizer}
//         onSelectSlot={handleDayClick}
//         view='month'
//         style={{ height: '100%' }}
//         />
//         </div>
        
//       <div>
//       {showDayCalendar && (
//         <DayCalendarComp
//           selectedDate={selectedDate}
//           // onTimeSelection={handleTimeSelection}
//         />
//         )}
//       </div>
//     </div>
//   );
// };

// const locales = {
//   'es': es,
// }

// const localizer = dateFnsLocalizer({
//   format,
//   parse,
//   startOfWeek,
//   getDay,
//   locales,
// })

// export default CalendarComp;

































// import './_CalendarComp.css';
// import React, { FC, useState } from 'react';
// import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
// import { format, parse, startOfWeek, getDay } from 'date-fns';
// import es from 'date-fns/locale/es';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// const App: FC = () => {
//   const [selectedSlotInfo, setSelectedSlotInfo] = useState(null);
//   const [showDatePicker, setShowDatePicker] = useState(false);
//   const [selectedDate, setSelectedDate] = useState(new Date());

//   const handleSelectSlot = (slotInfo: any) => {
//     setSelectedSlotInfo(slotInfo);
//     setShowDatePicker(true);
//   };

//   const handleDatePickerChange = (date: Date) => {
//     setSelectedDate(date);
//     console.log("Año:", date.getFullYear());
//     console.log("Mes:", date.getMonth() + 1); // Se agrega 1 porque los meses son base 0 (enero es 0)
//     console.log("Día:", date.getDate());
//     console.log("Hora:", date.getHours());
//     console.log("Minutos:", date.getMinutes());
//     setShowDatePicker(false);
//   };
  

//   return (
//     <div>
//       <Calendar
//         defaultView='day'
//         localizer={localizer}
//         onSelectSlot={handleSelectSlot}
//         views={['month', 'day']}
//       />
//       {showDatePicker && (
//         <div className="date-picker-container">
//           <DatePicker
//             selected={selectedDate}
//             onChange={handleDatePickerChange}
//             showTimeSelect
//             timeIntervals={15}
//             dateFormat="MMMM d, yyyy h:mm aa"
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// const locales = {
//   'es': es,
// }

// const localizer = dateFnsLocalizer({
//   format,
//   parse,
//   startOfWeek,
//   getDay,
//   locales,
// })

// export default App;




























// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// const DatePickerComponent = () => {
//   const [selectedDate, setSelectedDate] = useState(new Date());

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//     console.log("Año:", date.getFullYear());
//     console.log("Mes:", date.getMonth() + 1); // Se agrega 1 porque los meses son base 0 (enero es 0)
//     console.log("Día:", date.getDate());
//     console.log("Hora:", date.getHours());
//     console.log("Minutos:", date.getMinutes());
//   };

//   return (
//     <div>
//       <DatePicker
//         selected={selectedDate}
//         onChange={handleDateChange}
//         showTimeSelect
//         timeIntervals={15}
//         dateFormat="MMMM d, yyyy h:mm aa"
//       />
//     </div>
//   );
// };

// export default DatePickerComponent;














// No se ven los días en formato mes

// import './_CalendarComp.css'
// import { FC, useState } from 'react'
// import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
// import { format, parse, startOfWeek, getDay } from 'date-fns';
// import es from 'date-fns/locale/es'
// import 'react-big-calendar/lib/css/react-big-calendar.css'

// const App: FC = () => {

  
//   return (
//     <div>
//       <Calendar
//         defaultView='day'
//         localizer={localizer}
//         views={['month', 'day']}
//       />
//     </div>
//   )
// }

// const locales = {
//   'es': es,
// }

// const localizer = dateFnsLocalizer({
//   format,
//   parse,
//   startOfWeek,
//   getDay,
//   locales,

// })

// export default App






















// import { FC, useState } from 'react'
// import { Calendar, dateFnsLocalizer, Event } from 'react-big-calendar'
// import withDragAndDrop, { withDragAndDropProps } from 'react-big-calendar/lib/addons/dragAndDrop'
// import format from 'date-fns/format'
// import parse from 'date-fns/parse'
// import startOfWeek from 'date-fns/startOfWeek'
// import getDay from 'date-fns/getDay'
// import enUS from 'date-fns/locale/en-US'
// import es from 'date-fns/locale/es'
// import addHours from 'date-fns/addHours'
// import startOfHour from 'date-fns/startOfHour'

// import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'
// import 'react-big-calendar/lib/css/react-big-calendar.css'

// const App: FC = () => {
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
//       defaultView='day'
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
//   'es': es,
// }
// const endOfHour = (date: Date): Date => {
//   console.log('date: ', date);
//   const result = addHours(startOfHour(date), 1);
//   console.log('result: ', result);
//   return result

// }
// const now = new Date()
// console.log('now: ', now)
// const start = endOfHour(now)
// console.log('start :', start)
// const end = addHours(start, 2)
// console.log('end: ' , end)
// // The types here are `object`. Strongly consider making them better as removing `locales` caused a fatal error
// const localizer = dateFnsLocalizer({
//   format,
//   parse,
//   startOfWeek,
//   getDay,
//   locales,
// })
// //@ts-ignore
// const DnDCalendar = withDragAndDrop(Calendar)

// export default App















// funciona


// import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
// import format from 'date-fns/format' // Importa la función format de la biblioteca Date-fns, que se utiliza para formatear fechas.
// import parse from 'date-fns/parse' //Importa la función parse de Date-fns, que se utiliza para analizar cadenas de fecha y convertirlas en objetos de fecha.
// import startOfWeek from 'date-fns/startOfWeek' //Importa la función startOfWeek de Date-fns, que se utiliza para obtener el inicio de la semana para una fecha dada.
// import getDay from 'date-fns/getDay' // Importa la función getDay de Date-fns, que se utiliza para obtener el día de la semana para una fecha dada.
// // import enUS from 'date-fns/locale/en-US'
// import es from 'date-fns/locale/es'
// import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'
// import 'react-big-calendar/lib/css/react-big-calendar.css'

// const locales = {
//   'es': es,
// }

// const localizer = dateFnsLocalizer({
//   format,
//   parse,
//   startOfWeek,
//   getDay,
//   locales,
// })


// const CalendarComp = () => (
//   <div>
//     <Calendar
//       localizer={localizer}
//       startAccessor="start"
//       endAccessor="end"
//       style={{ height: 500 }}
//     />
//   </div>
// )

// export default CalendarComp



















// import React, { useState } from "react";
// import { Calendar, Views, dateFnsLocalizer } from "react-big-calendar";
// import { format, parse, startOfDay,  getDay, startOfWeek } from "date-fns";
// import es from "date-fns/locale/es";
// import "react-big-calendar/lib/css/react-big-calendar.css";
// import DatePicker from 'react-datepicker';


// const CalendarComp: React.FC = () => {
//   const [events, setEvents] = useState([]);
//   const [selectedDay, setSelectedDay] = useState<Date>(new Date());
//   const [year, setYear] = useState<number>(new Date().getFullYear());
//   const [month, setMonth] = useState<number>(new Date().getMonth());
//   const [days, setDays] = useState<number>(new Date().getDay());

//   console.log(selectedDay)


//   const handleSelect = (eventItem: any) => {
//     const title = window.prompt("New Event name");
//     if (title) {
//       const data = { title: title, start: eventItem.start, end: eventItem.end };
//       setEvents((events) => [...events, data]);
//     }
//   };

//   const handleDayClick = (day: Date) => {
//     setSelectedDay(day);
//     setYear(day.getFullYear());
//     setMonth(day.getMonth());
//     setDays(day.getDay());
//   };

//   const locales = {
//     'es': es,
//   }

//   const localizer = dateFnsLocalizer({
//       format,
//       parse,
//       startOfWeek,
//       getDay,
//       locales,
//   })

//   return (
//     <div className="py-3 d-flex">
//       <div className="flex-sm-column">
//         <DatePicker selectedDays={selectedDay} onDayClick={handleDayClick} />
//       </div>
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
//           defaultDate={startOfDay(new Date(year, month, days))}
//           style={{ height: 500 }}
//         />
//       </div>
//     </div>
//   );
// };

// export default CalendarComp;


















// import React, { useState } from "react";
// import { Calendar, Views, dateFnsLocalizer } from "react-big-calendar";
// import { format, parse, startOfDay, getDay, startOfWeek } from "date-fns";
// import es from "date-fns/locale/es";
// import "react-big-calendar/lib/css/react-big-calendar.css";
// import DatePicker from 'react-datepicker';

// interface TimeObject {
//   year: number;
//   month: number;
//   day: number;
//   hour: number;
//   minutes: number;
// }

// const CalendarComp: React.FC = () => {
//   const [events, setEvents] = useState<any[]>([]);
//   const [selectedDay, setSelectedDay] = useState<Date>(new Date());
//   const [year, setYear] = useState<number>(new Date().getFullYear());
//   const [month, setMonth] = useState<number>(new Date().getMonth());
//   const [days, setDays] = useState<number>(new Date().getDay());

//   const handleSelect = (slotInfo: any) => {
//     const start: Date = slotInfo.start;

//     // Obtener los datos de fecha y hora del inicio seleccionado
//     const selectedStart: TimeObject = {
//       year: start.getFullYear(),
//       month: start.getMonth(),
//       day: start.getDate(),
//       hour: start.getHours(),
//       minutes: start.getMinutes(),
//     };

//     console.log('selectedStart: ', selectedStart)

//     // Almacenar el evento en el estado de eventos
//     const title = "New Event"; // Puedes cambiar el título según lo desees
//     const data = { title: title, start: selectedStart };
//     setEvents([...events, data]);
//   };

//   const handleDayClick = (day: Date) => {
//     setSelectedDay(day);
//     setYear(day.getFullYear());
//     setMonth(day.getMonth());
//     setDays(day.getDay());
//   };

//   const locales = {
//     'es': es,
//   }

//   const localizer = dateFnsLocalizer({
//       format,
//       parse,
//       startOfWeek,
//       getDay,
//       locales,
//   })

//   return (
//     <div className="py-3 d-flex">
//       <div className="flex-sm-column">
//         <DatePicker selected={selectedDay} onChange={(date: Date) => handleDayClick(date)} />
//       </div>
//       <div className="flex-sm-column">
//         <Calendar
//           selectable
//           localizer={localizer}
//           events={events}
//           startAccessor="start"
//           endAccessor="end"
//           onSelectSlot={handleSelect}
//           onSelectEvent={(event) => alert(event.title)}
//           defaultView={Views.DAY}
//           defaultDate={startOfDay(new Date(year, month, days))}
//           min={new Date(year, month, days)}
//           max={new Date(year, month, days, 23, 59)} // Limitar selección a un día
//           style={{ height: 500 }}
//         />
//       </div>
//     </div>
//   );
// };

// export default CalendarComp;


















// Funcionando


// import React, { useState } from "react";
// import { Calendar, Views, dateFnsLocalizer } from "react-big-calendar";
// import { format, parse, startOfDay, getDay, startOfWeek } from "date-fns";
// import es from "date-fns/locale/es";
// import "react-big-calendar/lib/css/react-big-calendar.css";
// import DatePicker from 'react-datepicker';

// interface TimeObject {
//   year: number;
//   month: number;
//   day: number;
//   hour: number;
//   minutes: number;
// }

// const CalendarComp: React.FC = () => {

//   const [events, setEvents] = useState<any[]>([]);
//   const [selectedDay, setSelectedDay] = useState<Date>(new Date());
//   const [year, setYear] = useState<number>(new Date().getFullYear());
//   const [month, setMonth] = useState<number>(new Date().getMonth());
//   const [days, setDays] = useState<number>(new Date().getDay());

//   const handleSelect = (slotInfo: any) => {
//     const start: Date = slotInfo.start;

//     // Obtener los datos de fecha y hora del inicio seleccionado
//     const selectedStart: TimeObject = {
//       year: start.getFullYear(),
//       month: start.getMonth(),
//       day: start.getDate(),
//       hour: start.getHours(),
//       minutes: start.getMinutes(),
//     };

//     console.log('selectedStart: ', selectedStart)

//     // Almacenar el evento en el estado de eventos
//     const title = "New Event"; // Puedes cambiar el título según lo desees
//     const data = { title: title, start: selectedStart };
//     setEvents([...events, data]);
//   };

//   const handleDayClick = (day: Date) => {
//     setSelectedDay(day);
//     setYear(day.getFullYear());
//     setMonth(day.getMonth());
//     setDays(day.getDay());
//   };

//   const locales = {
//     'es': es,
//   }

//   const localizer = dateFnsLocalizer({
//       format,
//       parse,
//       startOfWeek,
//       getDay,
//       locales,
//   })

//   return (
//     <div className="py-3 d-flex">
//       <div className="flex-sm-column">
//         <DatePicker selected={selectedDay} onChange={(date: Date) => handleDayClick(date)} />
//       </div>
//       <div className="flex-sm-column">
//         <Calendar
//           selectable
//           localizer={localizer}
//           events={events}
//           startAccessor="start"
//           endAccessor="end"
//           onSelectSlot={handleSelect}
//           onSelectEvent={(event) => alert(event.title)}
//           defaultView={Views.DAY}
//           defaultDate={startOfDay(new Date(year, month, days))}
//           // min={new Date(year, month, days)}
//           // max={new Date(year, month, days, 23, 59)} // Limitar selección a un día
//           style={{ height: 500 }}
//           timeslots={60 / 15} // Permitir selección cada 15 minutos (60 minutos / 15 minutos)
//           step={15} // Pasos de 15 minutos
//           formats={{ timeGutterFormat: 'hh:mm ' }} // Formato de la hora en el margen de tiempo
//           min={new Date(year, month, days, 8, 0)} // Hora de inicio de la jornada
//           max={new Date(year, month, days, 20, 0)} // Hora de fin de la jornada
//           scrollToTime={new Date(year, month, days, 8, 0)} // Desplazarse a la hora de inicio de la jornada por defecto
//           dayLayoutAlgorithm="no-overlap" // Evitar superposición de eventos en el mismo día
//         />
//       </div>
//     </div>
//   );
// };

// export default CalendarComp;



















// import React, { useState } from "react";
// import { Calendar, Views, dateFnsLocalizer } from "react-big-calendar";
// import { startOfDay, addMinutes } from "date-fns";
// import es from "date-fns/locale/es";
// import "react-big-calendar/lib/css/react-big-calendar.css";
// import DatePicker from 'react-datepicker';

// interface EventData {
//   start: Date;
//   end: Date;
//   title: string;
// }

// const generateEvents = (day: Date) => {
//   const events: EventData[] = [];

//   // Agregar eventos con diferentes duraciones
//   events.push({
//     start: new Date(day.getFullYear(), day.getMonth(), day.getDate(), 8, 0),
//     end: new Date(day.getFullYear(), day.getMonth(), day.getDate(), 8, 30),
//     title: "Evento corto",
//   });

//   events.push({
//     start: new Date(day.getFullYear(), day.getMonth(), day.getDate(), 9, 0),
//     end: new Date(day.getFullYear(), day.getMonth(), day.getDate(), 10, 0),
//     title: "Evento medio",
//   });

//   events.push({
//     start: new Date(day.getFullYear(), day.getMonth(), day.getDate(), 11, 0),
//     end: new Date(day.getFullYear(), day.getMonth(), day.getDate(), 12, 0),
//     title: "Evento largo",
//   });

//   return events;
// };

// const CalendarComp: React.FC = () => {
//   const [selectedDay, setSelectedDay] = useState<Date>(new Date());

//   const handleDayClick = (day: Date) => {
//     setSelectedDay(day);
//   };

//   const locales = {
//     'es': es,
//   }

//   const localizer = dateFnsLocalizer({
//       locales,
//   })

//   return (
//     <div className="py-3 d-flex">
//       <div className="flex-sm-column">
//         <DatePicker selected={selectedDay} onChange={(date: Date) => handleDayClick(date)} />
//       </div>
//       <div className="flex-sm-column">
//         <Calendar
//           selectable
//           localizer={localizer}
//           events={generateEvents(selectedDay)}
//           startAccessor="start"
//           endAccessor="end"
//           onSelectEvent={(event) => alert(event.title)}
//           defaultView={Views.DAY}
//           defaultDate={selectedDay}
//           style={{ height: 500 }}
//           timeslots={1} // Permite que cada rango de tiempo sea de un minuto
//           step={30} // Pasos de 30 minutos
//           scrollToTime={selectedDay}
//           dayLayoutAlgorithm="no-overlap" // Evitar superposición de eventos en el mismo día
//         />
//       </div>
//     </div>
//   );
// };

// export default CalendarComp;
























// import React, { useState } from "react";
// import { Calendar, Views, dateFnsLocalizer } from "react-big-calendar";
// import { startOfDay, addMinutes } from "date-fns";
// import es from "date-fns/locale/es";
// import "react-big-calendar/lib/css/react-big-calendar.css";
// import DatePicker from 'react-datepicker';

// interface EventData {
//   start: Date;
//   end: Date;
//   title: string;
// }

// const generateEvents = (day: Date) => {
//   const events: EventData[] = [];
//   const startOfDayTime = startOfDay(day);
//   let startTime = startOfDayTime;

//   // Generar eventos para cada intervalo de 15 minutos en un día
//   while (startTime < addMinutes(startOfDayTime, 24 * 60)) {
//     const endTime = addMinutes(startTime, 15);
//     events.push({
//       start: startTime,
//       end: endTime,
//       title: "Evento",
//     });
//     startTime = endTime;
//   }

//   return events;
// };

// const CalendarComp: React.FC = () => {
//   const [selectedDay, setSelectedDay] = useState<Date>(new Date());

//   const handleDayClick = (day: Date) => {
//     setSelectedDay(day);
//   };

//   const locales = {
//     'es': es,
//   }

//   const localizer = dateFnsLocalizer({
//       locales,
//   })

//   return (
//     <div className="py-3 d-flex">
//       <div className="flex-sm-column">
//         <DatePicker selected={selectedDay} onChange={(date: Date) => handleDayClick(date)} />
//       </div>
//       <div className="flex-sm-column">
//         <Calendar
//           selectable
//           localizer={localizer}
//           events={generateEvents(selectedDay)}
//           startAccessor="start"
//           endAccessor="end"
//           onSelectEvent={(event) => alert(event.title)}
//           defaultView={Views.DAY}
//           defaultDate={selectedDay}
//           style={{ height: 500 }}
//           timeslots={4} // Permitir selección cada 15 minutos (60 minutos / 15 minutos = 4)
//           step={15} // Pasos de 15 minutos
//           formats={{ timeGutterFormat: 'hh:mm ' }} // Formato de la hora en el margen de tiempo
//           scrollToTime={selectedDay}
//           dayLayoutAlgorithm="no-overlap" // Evitar superposición de eventos en el mismo día
//         />
//       </div>
//     </div>
//   );
// };

// export default CalendarComp;

























// import React, { useState } from "react";
// import { Calendar, Views, dateFnsLocalizer } from "react-big-calendar";
// import { startOfDay, addMinutes } from "date-fns";
// import es from "date-fns/locale/es";
// import "react-big-calendar/lib/css/react-big-calendar.css";
// import DatePicker from 'react-datepicker';

// interface TimeObject {
//   year: number;
//   month: number;
//   day: number;
//   hour: number;
//   minutes: number;
// }

// const CalendarComp: React.FC = () => {
//   const [selectedTime, setSelectedTime] = useState<Date | null>(null);
//   const [selectedDay, setSelectedDay] = useState<Date>(new Date());
//   const [year, setYear] = useState<number>(new Date().getFullYear());
//   const [month, setMonth] = useState<number>(new Date().getMonth());
//   const [days, setDays] = useState<number>(new Date().getDay());

//   const handleSelect = (slotInfo: any) => {
//     const selectedTime = slotInfo.start;

//     // Actualizar el estado con la hora seleccionada
//     setSelectedTime(selectedTime);

//     // Obtener los datos de fecha y hora del inicio seleccionado
//     const selectedStart: TimeObject = {
//       year: selectedTime.getFullYear(),
//       month: selectedTime.getMonth(),
//       day: selectedTime.getDate(),
//       hour: selectedTime.getHours(),
//       minutes: selectedTime.getMinutes(),
//     };

//     console.log('selectedStart: ', selectedStart)
//   };

//   const handleDayClick = (day: Date) => {
//     setSelectedDay(day);
//     setYear(day.getFullYear());
//     setMonth(day.getMonth());
//     setDays(day.getDay());

//     // Al hacer clic en un día, deseleccionar la hora seleccionada
//     setSelectedTime(null);
//   };

//   const locales = {
//     'es': es,
//   }

//   const localizer = dateFnsLocalizer({
//       locales,
//   })

//   return (
//     <div className="py-3 d-flex">
//       <div className="flex-sm-column">
//         <DatePicker selected={selectedDay} onChange={(date: Date) => handleDayClick(date)} />
//       </div>
//       <div className="flex-sm-column">
//         <Calendar
//           selectable
//           localizer={localizer}
//           startAccessor="start"
//           endAccessor="end"
//           onSelectSlot={handleSelect}
//           defaultView={Views.DAY}
//           defaultDate={startOfDay(new Date(year, month, days))}
//           min={new Date(year, month, days)}
//           max={new Date(year, month, days, 23, 59)} // Limitar selección a un día
//           style={{ height: 500 }}
//           timeslots={4} // Permitir selección cada 15 minutos (60 minutos / 15 minutos = 4)
//           step={15} // Pasos de 15 minutos
//           scrollToTime={selectedTime || new Date(year, month, days, 0, 0)} // Desplazarse a la hora seleccionada o al inicio del día
//           dayLayoutAlgorithm="no-overlap" // Evitar superposición de eventos en el mismo día
//         />
//       </div>
//     </div>
//   );
// };

// export default CalendarComp;
















// import React, { useState } from 'react';
// import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
// import moment from 'moment';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import DayCalendarComp from './DayCalendarComp'; // Suponiendo que tienes un componente Day en un archivo separado

// const CalendarComp: React.FC = () => {
//   const [selectedDate, setSelectedDate] = useState(new Date());

//   // Configuración del localizador de fechas
//   const localizer = momentLocalizer(moment);

//   // Manejar cambio de fecha en la vista de mes
//   const handleMonthDateChange = (date: Date) => {
//     setSelectedDate(date);
//   };

//   return (
//     <div>
//       {/* Vista de mes */}
//       <Calendar
//         localizer={localizer}
//         events={[]} // Aquí debes pasar tus eventos
//         startAccessor="start"
//         endAccessor="end"
//         defaultView={Views.MONTH}
//         onSelectEvent={(event) => console.log(event)}
//         onSelectSlot={(slotInfo) => console.log(slotInfo)}
//         style={{ height: 500 }}
//         onSelecting={(range) => console.log(range)}
//         onNavigate={handleMonthDateChange}
//         selectable  // Asegúrate de incluir el prop selectable con un valor booleano
//       />

//       {/* Vista de día */}
//       <div>

//       <DayCalendarComp selectedDate={selectedDate} />
//       </div>
//     </div>
//   );
// };

// export default CalendarComp;

























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