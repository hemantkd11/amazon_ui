import React, { useState } from "react";
import {useSearchParams} from "react-router-dom"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Navbars from "../../Mainfile/Navbar";

const Card = () => {
    
    const [searchparams, setSearchparams]=useSearchParams()
    const [searchBar ,setSearchBar] = useState(searchparams.find || " ")
    const handleSubmit =(e)=>{
        e.preventDefault()
       setSearchparams({q:searchBar})
       alert(searchBar)
        // setSearchparams(searchparams(""))
       setSearchBar("")
    }
    
    return(<div>
       
        <div style={{border:"1px solid lightgray" , 
                width:"fit-content" ,
                alignItems:'center' ,
                justifyContent:"center" ,
                margin:"50px"}} >
            <input 
                type="text" 
                style={{border:"none"}}
                placeholder="hello" 
                value={searchBar} 
                onChange={(e)=>setSearchBar(e.target.value)}/>
            {/* <input type="submit" value="search"/> */}
            <button  
                style={{border:"none" ,
                background:""
                             }}
                type="button"
                value="btn" 
                onClick={handleSubmit}
                name="btn" 
                placeholder="hello">  search
                        
            </button>
            <button 
                style={{border:"none"}} 
                onClick={()=>setSearchparams({})}>
                 Reset URl
            </button>

        </div> 



        <div>
            <AddShoppingCartIcon/>
        </div>
    </div>)
 }


//  React.useEffect(() => {
//     const getData = setTimeout(() => {
//       axios
//       .get(`https://api.postalpincode.in/pincode/${pinCode}`)
//       .then((response) => {
//         console.log(response.data[0]);
//       });
//     }, 2000)
// }, [pinCode])


// import {
//     makeStyles,
//     Container,
//     Typography,
//     TextField,
//     Button,
//   } from "@material-ui/core";
//   import { useForm } from "react-hook-form";
//   import { useState } from "react";
  
  
//   const useStyles = makeStyles((theme) => ({
//     heading: {
//       textAlign: "center",
//       margin: theme.spacing(1, 0, 4),
//     },
//     submitButton: {
//       marginTop: theme.spacing(4),
//     },
//   }));
  
//   function Card() {
   
//     const { heading, submitButton } = useStyles();
//     return (
//       <Container maxWidth="xs">
//         <Typography className={heading} variant="h3">
//           Sign Up Form
//         </Typography>
//         <form onSubmit={handleSubmit(onSubmit)} noValidate>
//           <TextField
//             {...register("email")}
//             variant="outlined"
//             margin="normal"
//             label="Email"
//             fullWidth
//             required
//           />
//           <TextField
//             {...register("firstName")}
//             variant="outlined"
//             margin="normal"
//             label="First Name"
//             fullWidth
//             required
//           />
//           <TextField
//             {...register("password")}
//             variant="outlined"
//             margin="normal"
//             label="Password"
//             type="password"
//             fullWidth
//             required
//           />
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             className={submitButton}
//           >
//             Sign Up
//           </Button>
//           {json && (
//             <>
//               <Typography variant="body1">
//                 Below is the JSON that would normally get passed to the server
//                 when a form gets submitted
//               </Typography>
//               <Typography variant="body2">{json}</Typography>
//             </>
//           )}
//         </form>
//       </Container>
//     );
//   }
  
  export default  Card;