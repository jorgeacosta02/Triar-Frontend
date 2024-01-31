import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landingPage/landingPage';
import CompanyPage from './pages/companyPage/companyPage';
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
import ProtectedRoutesPage from './components/protectedRoutesComp/ProtectedRoutesComp';


const App = () => {
  return (
    <div>
      <Routes>

        {/*General Routes*/}
        <Route path="/" element={<LandingPage />} />
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>

        {/*Protected Routes*/}
       <Route element={<ProtectedRoutesPage/>}>
        <Route path='/tasks' element={<TasksPage/>}/>
        <Route path='/add-task' element={<AddTaskPage/>}/>
        <Route path='/task/:id' element={<TaskByIdPage/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
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