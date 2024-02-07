import { Routes, Route } from 'react-router-dom';
import CompanyPage from './pages/HomePage/HomePage';
import ServicesPage from './pages/servicesPage/servicesPage';
import EquipmentPage from './pages/equipmentPage/equipmentPage';
import JobsPage from './pages/jobsPage/jobsPage';
import ContactPage from './pages/contactPage/contactPage';
import RegisterPage from './pages/registerPage/RegisterPage';
import LoginPage from './pages/loginPage/LoginPage';
import TasksPage from './pages/taskPages/TasksPage';
import AddTaskPage from './pages/taskPages/AddTaskPage';
import TaskByIdPage from './pages/taskPages/TaskByIdPage';
import ProfilePage from './pages/profilePage/ProfilePage';
import EmployeesRoutesComp from './components/protectedRoutes/EmployeesRoutesComp/EmployeesRoutesComp';
import AdminRoutesComp from './components/protectedRoutes/AdminRoutesComp/AdminRoutesComp';
import HomePage from './pages/HomePage/HomePage';
// import MyCalendar from './components/calendarComp/CalendarComp';
import DayCalendarComp from './components/calendarDayComp/DayCalendarComp';

const App = () => {
  return (
    <div>
      <Routes>

        {/*General Routes*/}
        <Route path="/day" element={<DayCalendarComp />} />
        {/* <Route path="/calendar" element={<MyCalendar />} /> */}
        <Route path="/" element={<HomePage />} />
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>

        {/*Protected Routes*/}
       <Route element={<EmployeesRoutesComp/>}>
        <Route path='/tasks' element={<TasksPage/>}/>
        <Route path='/task/:id' element={<TaskByIdPage/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
       </Route>
       <Route element={<AdminRoutesComp/>}>
        <Route path='/add-task' element={<AddTaskPage/>}/>

       </Route>
  

        {/*Exploservice Routes*/}
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/equipment" element={<EquipmentPage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  )
}

export default App
