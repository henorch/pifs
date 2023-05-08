import logo from './logo.svg';
import './App.css';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.routes';
import SignIn from './components/signIn/signIn.component';
import AuthComponent from './routes/auth/auth.component';
import SignUp from './components/signUp/signUp.component';
import Home from './routes/home/home.routes';
import HomeAppliance from './routes/homeaplliances/homeaplliances.route';






const ProtectedRoutes = () => {
  return(
    <Routes>
      <Route path="/home" elemenet={<Navigation/>}>
        <Route index element={<Home/>}/>
      </Route>

    </Routes>
  )
}



function App() {
  return (
    <Routes>
       <Route path='/' element={<Navigation/>}>
        <Route index path='/' element={<Home/>}/>
        <Route path='/homeappliances' element={<HomeAppliance/>}/>
        </Route>
      <Route path='/auth' element={<AuthComponent/>}>
        <Route index  element={<SignIn/>}/>
        <Route path='signup' element={<SignUp/>}/>
      </Route>
      
    </Routes>
     
  );
}

export default App;
