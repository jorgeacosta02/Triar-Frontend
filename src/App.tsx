import { Routes, Route } from 'react-router-dom';
import CompanyPage from './pages/HomePage/HomePage';
import ServicesPage from './pages/servicesPage/servicesPage';
import EquipmentPage from './pages/equipmentPage/equipmentPage';
import JobsPage from './pages/jobsPage/jobsPage';
import ContactPage from './pages/contactPage/contactPage';
import UserRegisterPage from './pages/userRegisterPage/UserRegisterPage';
import LoginPage from './pages/userLoginPage/UserLoginPage';
import TasksPage from './pages/taskPages/TasksPage';
import AddTaskPage from './pages/taskPages/AddTaskPage';
import TaskByIdPage from './pages/taskPages/TaskByIdPage';
import UserProfilePage from './pages/userProfilePage/UserProfilePage';
import EmployeesRoutesComp from './components/protectedRoutes/EmployeesRoutesComp/EmployeesRoutesComp';
import AdminRoutesComp from './components/protectedRoutes/AdminRoutesComp/AdminRoutesComp';
import HomePage from './pages/HomePage/HomePage';
import CalendarPage from './pages/calendarPage/CalendarPage';
import WorkerRegisterPage from './pages/workerRegisterPage/WorkerRegisterPage';
import WorkerLoginPage from './pages/workerLoginPage/WorkerLoginPage';


const App = () => {
  return (
    <div>
      <Routes>

        {/*Free Routes*/}
        <Route path="/" element={<HomePage />} />
        <Route path="/appointment" element={<CalendarPage />} />
        <Route path='/user-register' element={<UserRegisterPage/>}/>
        <Route path='/user-login' element={<LoginPage/>}/>
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/equipment" element={<EquipmentPage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/contact" element={<ContactPage />} />

        <Route path="/worker-login" element={<WorkerLoginPage/>}/>
        <Route path="/worker-register" element={<WorkerRegisterPage/>} />

        {/*Protected Routes*/}
        {/* Employees Routes*/}
       <Route element={<EmployeesRoutesComp/>}>
        <Route path='/tasks' element={<TasksPage/>}/>
        <Route path='/task/:id' element={<TaskByIdPage/>}/>
        <Route path='/user-profile' element={<UserProfilePage/>}/>
       </Route>

       {/* Admin Routes */}
       <Route element={<AdminRoutesComp/>}>
        <Route path='/add-task' element={<AddTaskPage/>}/>
       </Route>
  


      </Routes>
    </div>
  )
}

export default App
