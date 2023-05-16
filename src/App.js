import logo from './logo.svg';
import './App.css';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
const Navigation = lazy(() => import('./routes/navigation/navigation.routes'));
const SignIn = lazy(() => import('./components/signIn/signIn.component'));
const AuthComponent = lazy(() => import('./routes/auth/auth.component'));
const SignUp = lazy(() => import('./components/signUp/signUp.component'));
const Home = lazy(() => import('./routes/home/home.routes'));
const Furnitures = lazy(() => import('./routes/furnitures/furnitures.routes'));
const Wares = lazy(() => import('./routes/wares/wares.routes'));
const OfficeSurplies = lazy(() => import('./routes/office/offices.routes'));
const HomeAppliance = lazy(() => import('./routes/office/offices.routes'));
const Equipments = lazy(() => import('./routes/office/offices.routes'));
const CheckOutPage = lazy(() => import('./routes/check-out-page/check-out.routes'));
const DetailPage = lazy(() => import('./routes/detail/details.routes'));



function App() {
  return (
    <Suspense fallback={<p>Loading Please wait</p>}>

    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index path='/' element={<Home/>}/>
        <Route path='homeappliances' element={<HomeAppliance/>}/>
        <Route path="furnitures" element={<Furnitures/>}/>
        <Route path="wares" element={<Wares/>}/>
        <Route path="equipments" element={<Equipments/>}/>
        <Route path="office-surplies" element={<OfficeSurplies/>}/>
        <Route path='checkout' element={<CheckOutPage/>}/>
        <Route path="/detail" element={<DetailPage/>}/>
        {/* <Route path="others" element={<Others/>}/> */}
      </Route>
      <Route path='/auth' element={<AuthComponent/>}>
        <Route path='/auth' element={<SignIn/>}/>
        <Route path='signup' element={<SignUp/>}/>
      </Route>
    </Suspense>
      
    </Routes>
     
  );
}

export default App;
