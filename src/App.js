import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact"
import Gallery from "./pages/Gallery";
import Schedule from "./pages/Schedule";
import Subcouncil from "./pages/Subcouncil";
import Login from "./pages/Login";
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Navbar from "./components/Navbar";
import Register from "./pages/Register"
import './App.css'
const App = () => {
  return ( 
    <BrowserRouter>
    <main>
      <Routes>
        <Route  path = "/" element = {<Home/>}/>
        <Route  path = "/about" element = {<About/>}/>
        <Route  path = "/Contact" element = {<Contact/>}/>
        <Route  path = "/Gallery" element = {<Gallery/>}/>
        <Route  path = "/Schedule" element = {<Schedule/>}/>
        <Route  path = "/Subcouncil" element = {<Subcouncil/>}/>
        <Route path = "/login" element = {<Login/>}/>
        <Route path = "/register" element = {<Register/>}/>


        
      </Routes>
    </main>
    <Navbar/>
    <Home/>
    </BrowserRouter>
  

   );
}
 
export default App;
