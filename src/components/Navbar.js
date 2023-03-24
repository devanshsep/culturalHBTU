import {Box,AppBar,Toolbar}from "@mui/material"
import Typography from "@mui/material/Typography"
import  {Link} from "react-router-dom"
import "../App.css"
import Grid from '@mui/material/Grid';
import styled from "styled-components";
import logo from '../assets/logo.jpg'
import {useNavigate} from "react-router-dom"
import { routePath } from "../constants/route";
 
const Logo = styled('img')({
    width:76,
    cursor:'pointer'
})




const Navbar = () => {
    
const navigate = useNavigate();
    return ( 
        <AppBar>
            <Toolbar style = {{backgroundColor:"black"}}>

<Logo  src = {logo} alt ="logo" onClick = {()=>navigate(routePath.home)}/>
          
 

                
                <Box style = {{display:"flex",justifyContent:"space-between",margin:"auto",width:400}}>
                <Link to =  "/" style = {{textDecoration:"none",color:"#eee8aa",fontWeight:"bold"}}>Home</Link>
                <Link to =  "/about" style = {{textDecoration:"none",color:"#eee8aa",fontWeight:"bold"}}>About</Link>
                <Link to =  "/gallery" style = {{textDecoration:"none",color:"#eee8aa",fontWeight:"bold"}}>Gallery</Link>
                <Link to =  "/schedule" style = {{textDecoration:"none",color:"#eee8aa",fontWeight:"bold"}}>Schedule</Link>
                <Link to =  "/subcouncil" style = {{textDecoration:"none",color:"#eee8aa",fontWeight:"bold"}}>Subcoucil</Link>
                <Link to =  "/contact" style = {{textDecoration:"none",color:"#eee8aa",fontWeight:"bold"}}>Contact</Link>

                </Box>
                <Box style = {{display:"flex",alignItems:"center"}}>
                <Link to =  "/login" style={{textDecoration:"none",color:"white",fontWeight:"bold"}}>Log IN </Link><p style = {{margin:15}}>or </p>   <Link style={{textDecoration:"none",margin:15}}></Link>
                <Link to = "/register" style = {{textDecoration:"none",margin:5}}>
                <Grid style={{backgroundColor:"#eee8aa",color:"black",fontWeight:"bold",padding:10,borderRadius:3}}>
                    Register
                    </Grid> 
                </Link>
                
  </Box>
                
                

            </Toolbar>
        </AppBar>
     );
}
 
export default Navbar;