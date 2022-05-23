import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import Purchase from './Pages/Purchase/Purchase';

function App() {
  return (
    <div className="App">
        <Navbar></Navbar>
        <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/purchase/:id' element={<Purchase></Purchase>}></Route>


        </Routes>

    </div>
  );
}

export default App;
