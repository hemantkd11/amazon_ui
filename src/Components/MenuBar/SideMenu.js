import React  from "react";
import { AppBar , Box } from "@material-ui/core";

const SideMenu =()=>{
return (
    <div className="flexbox downbar" > 
        <Box  sx={

            {
                border:"none ","&:hover":{
                    border:"1px solid white",
                    boxSizing:"border-box",
                    padding:"4px",

                },
                padding:"5px",
                boxSizing:"border-box",
                margin:" 0 5px  0 5px "
                

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
                },
                padding:"5px",
                boxSizing:"border-box",
                margin:" 0 5px  0 5px "
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
                },
                padding:"5px",
                margin:" 0 5px  0 5px "
            }
        }>
          Best Sellers
        </Box>
        <Box sx={
            {
                border:"none ","&:hover":{
                    border:"1px solid white",
                    boxSizing:"border-box",
                    padding:"4px"
                },
                padding:"5px",
                margin:" 0 5px  0 5px "
            }
        } >
          Mobile
        </Box>
        <Box sx={
            {
                border:"none ","&:hover":{
                    border:"1px solid white",
                    boxSizing:"border-box",
                    padding:"4px"
                },
                padding:"5px",
                margin:" 0 5px  0 5px "
            }
        }>
          Today's Deals
        </Box>
        <Box sx={
            {
                border:"none ","&:hover":{
                    border:"1px solid white",
                    boxSizing:"border-box"
                    ,
                    padding:"4px"
                },
                padding:"5px",
                margin:" 0 5px  0 5px "
                
            }
        } >
          Customer Service
        </Box>
        <Box sx={
            {
                border:"none ","&:hover":{
                    border:"1px solid white",
                    boxSizing:"border-box",
                    padding:"4px"
                },
                padding:"5px",
                margin:" 0 5px  0 5px "
            }
        }>
          Electronics
        </Box>
   </div>
 
)
}
export default SideMenu