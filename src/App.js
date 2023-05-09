import logo from './logo.svg';
import './App.css';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.routes';
import SignIn from './components/signIn/signIn.component';
import AuthComponent from './routes/auth/auth.component';
import SignUp from './components/signUp/signUp.component';
import Home from './routes/home/home.routes';
import Furnitures from './routes/furnitures/furnitures.routes';
import Wares from './routes/wares/wares.routes';
import OfficeSurplies from './routes/office/offices.routes';
import HomeAppliance from './routes/homeaplliances/homeappliance.route';
import Equipments from './routes/equipments/equipments';
import CheckOutPage from './routes/check-out-page/check-out.routes';



function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index path='/' element={<Home/>}/>
        <Route path='homeappliances' element={<HomeAppliance/>}/>
        <Route path="furnitures" element={<Furnitures/>}/>
        <Route path="wares" element={<Wares/>}/>
        <Route path="equipments" element={<Equipments/>}/>
        <Route path="office-surplies" element={<OfficeSurplies/>}/>
        <Route path='checkout' element={<CheckOutPage/>}/>
        {/* <Route path="others" element={<Others/>}/> */}
      </Route>
      <Route path='/auth' element={<AuthComponent/>}>
        <Route path='/auth' element={<SignIn/>}/>
        <Route path='signup' element={<SignUp/>}/>
      </Route>
      
    </Routes>
     
  );
}

export default App;
