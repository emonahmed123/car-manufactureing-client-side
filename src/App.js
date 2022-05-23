import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import Purchase from './Pages/Purchase/Purchase';
import Login from  './Pages/Login/Login';
import Sigup from './Pages/Login/Sigup';
import RequireAuth from './Pages/Login/RequireAuth';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashBoard from './Pages/DashBoard/DashBoard';
import Myoder from './Pages/DashBoard/Myoder';
import Myprofile from './Pages/DashBoard/Myprofile';
import AddReview from './Pages/DashBoard/AddReview';

function App() {
  return (
    <div className="App">
        <Navbar></Navbar>
        <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/purchase/:id' element={<RequireAuth>
          <Purchase></Purchase>
        </RequireAuth>}></Route>


        <Route path='/MyPortfolio' element={<MyPortfolio></MyPortfolio>}></Route>
      
         <Route path='dashboard'element={
            <RequireAuth>
                 <DashBoard></DashBoard>

            </RequireAuth>


         }>
         <Route index element={<Myoder></Myoder>}></Route>
         <Route  path='profile'  element ={<Myprofile></Myprofile>}></Route>
         <Route  path='addRiview' element={<AddReview></AddReview>}></Route>
                     
         </Route>
      
      
      
      
      
      
      
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/sigup' element={<Sigup></Sigup>}></Route>

        </Routes>
       <ToastContainer/>
    </div>
  );
}

export default App;
