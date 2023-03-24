import {styled,Typography} from "@mui/material"
import "../App.css"

const StyledTitle = styled(Typography)`
margin-top:164px;
 `

const About = () => {
    return ( 
      
        <div>
            <Typography variant="h3" style = {{color:"#eee8aa",marginTop:100,padding: 1}}>About Adhyaay</Typography>
<StyledTitle style ={{color:"white",fontFamily:"sans-serif",fontWeight:400,padding:10}}>ADHYAAY is the annual literary-cum-cultural fest of HBTU.
 It is expected that ADHYAAY'23 will have 10,000+ footfalls and hence it will be larger than ever. A total of 3 days into Adhyaay will witness various events coming from all the sub-councils of HBTU.
  ADHYAAY brings the combined list of events from cultural, literary, hobby and photography sub-councils into one bracket
</StyledTitle>
        </div>
     );
}
 
export default About;