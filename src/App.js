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
import Alluser from './Pages/DashBoard/Alluser';
import MangePart from './Pages/DashBoard/MangePart';
import Mangeoders from './Pages/DashBoard/Mangeoders';
import Addapart from './Pages/DashBoard/Addapart';
import RequireAdmin from './Pages/Login/RequireAdmin';
import Footer from './Pages/Shared/Footer';
import NotFound from './Pages/Shared/NotFound'
import Blogs from './Pages/Blogs/Blogs';
function App() {
  return (
    <div className="App">
        <Navbar></Navbar>
        <Routes>
        <Route path='/' element={<Home></Home>} > </Route>
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
          <Route index element={<Myprofile></Myprofile>}></Route> 
         <Route  path='order'  element ={<Myoder></Myoder>}></Route>
         <Route  path='addRiview' element={<AddReview></AddReview>}></Route>
         <Route  path='alluser' element={<RequireAdmin>
          <Alluser></Alluser>
         </RequireAdmin>}></Route>
         
         <Route  path='mangepart' element={<RequireAdmin><MangePart></MangePart></RequireAdmin>}></Route>
         <Route  path='mangeorder' element={<RequireAdmin><Mangeoders></Mangeoders></RequireAdmin>}></Route>
         <Route  path='addpart' element={<Addapart></Addapart>}></Route>
                      
         </Route>
      
          <Route path='/blogs' element={<Blogs></Blogs>} ></Route>
          
      
      
      
      
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/sigup' element={<Sigup></Sigup>}></Route>
        <Route path='*' element={<NotFound></NotFound>} ></Route>
        </Routes>
        <Footer></Footer>
       <ToastContainer/>
    
    </div>
  );
}

export default App;
