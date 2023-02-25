import React  from "react";
import { AppBar , Box } from "@material-ui/core";
import { fontSize } from "@mui/system";

const SideMenu =()=>{
return (
    <div className="flexbox downbar" > 
        <Box  sx={

            {
                border:"none ","&:hover":{
                    border:"1px solid white",
                    boxSizing:"border-box",
                    padding:"4px",
                    fontSize:'12px'

                },
                padding:"5px",
                boxSizing:"border-box",
                margin:" 0 5px  0 5px ",
                fontSize:'1vw'

            }
        }>
       All
        </Box >
        <Box sx={
            {
                border:"none ","&:hover":{
                    border:"1px solid white",
                    boxSizing:"border-box",
                    padding:"4px",
                    fontSize:'12px'
                },
                padding:"5px",
                boxSizing:"border-box",
                margin:" 0 5px  0 5px ",
                fontSize:'1vmax'
            }
        }>
          Sell
        </Box>
        <Box sx={
            {
                border:"none ","&:hover":{
                    border:"1px solid white",
                    boxSizing:"border-box",
                    padding:"4px",
                    fontSize:'12px'
                },
                padding:"5px",
                margin:" 0 5px  0 5px ",
                fontSize:'1vw'
            }
        }>
          Best Sellers
        </Box>
        <Box sx={
            {
                border:"none ","&:hover":{
                    border:"1px solid white",
                    boxSizing:"border-box",
                    padding:"4px",
                    fontSize:'12px'
                },
                padding:"5px",
                margin:" 0 5px  0 5px ",
                fontSize:'1vw'
            }
        } >
          Mobile
        </Box>
        <Box sx={
            {
                border:"none ","&:hover":{
                    border:"1px solid white",
                    boxSizing:"border-box",
                    padding:"4px",
                    fontSize:'12px'

                },
                padding:"5px",
                margin:" 0 5px  0 5px ",
                fontSize:'1vw'
            }
        }>
          Today's Deals
        </Box>
        <Box sx={
            {
                border:"none ","&:hover":{
                    border:"1px solid white",
                    boxSizing:"border-box",
                    padding:"4px",
                    fontSize:'1vw'
                },
                padding:"5px",
                margin:" 0 5px  0 5px ",
                fontSize:'1vw'
                
            }
        } >
          Customer Service
        </Box>
        <Box sx={
            {
                border:"none ","&:hover":{
                    border:"1px solid white",
                    boxSizing:"border-box",
                    padding:"4px",
                    fontSize:'1vw'
                },
                padding:"5px",
                margin:" 0 5px  0 5px ",
                fontSize:'1vw',
       
            }
        }>
          Electronics
        </Box>
   </div>
 
)
}
export default SideMenu