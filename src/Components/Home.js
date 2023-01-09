import React ,{useEffect ,useState} from "react";
import Card from "./Card";



const Home = ( )=>{
  const [items,setItems] = useState([])


   useEffect(() =>{
    const fetchProduct = async () => {
        const data = await fetch("/list")
        setItems(await data.json())
        console.log("data>>>>",data)
    }
    fetchProduct()
   },[])


//    let box = document.querySelector(".image-container");
//     const btnPrivious =()=>{
//     let width = box.clientWidth
//     box.scrollLeft = box.scrollLeft - width; 
    
// }
//     const btnNext=() =>{
//     let width = box.clientWidth
//     box.scrollLeft = box.scrollLeft + width;
//}

    return(
        <div className="Home-page">
          
            <div className="banner">
            {/* <button className="lessthen" onClick={btnPrivious}><p>&lt;</p></button>
            <button className="greaterthen" onClick={btnNext}><p>&gt;</p></button> */}
                <img src="./banner.jpg"/>
            </div>
            <div className="main">

                {items.map((data)=>
                    <>
                  
                     <Card 
                      id={data._id}
                      image={data.image_url} 
                      rating={data.rating}
                      price={data.price}
                      title={data.title}/>
                    </>
                     

                )}
               

            </div>
        
        </div>
    )
}


export default Home


































{/*                 
                 <Card  
                 id={2}
                 image={"https://m.media-amazon.com/images/I/613AbRRTA6L._AC_SL1500_.jpg"}
                 rating={4}
                 price={28929}
                 title={"MAKAVO Slim Fit for OnePlus Nord N20 5G Case with Screen Protector [Ultra Thin] [Camera Cover] Full Protection Flexible Bumper Hard Matte PC Back Cover for One Plus N20 5G (Black)"}/>
                 
                 <Card
                 id={3}  
                 image={"https://m.media-amazon.com/images/I/81uxx+FIV+L._AC_SL1500_.jpg"}
                 rating={4}
                 price={1899}
                 title={"Ortizan Portable Bluetooth Speaker, IPX7 Waterproof Wireless Speaker with 24W Loud Stereo Sound, Outdoor Speakers with Bluetooth 5.0, 30H Playtime, 66ft Bluetooth Range, Dual Pairing for Home, Travel"}/>
                 
                 <Card
                 id={4} 
                 image={"https://m.media-amazon.com/images/I/81jc-3UMGBL._AC_SX425_.jpg"}
                 rating={4}
                 price={19999}
                 title={"Pyle Portable Bluetooth PA Speaker System - 600W Rechargeable Outdoor Bluetooth Speaker Portable PA System w/ Dual 8” Subwoofer 1” Tweeter, Microphone In, Party Lights, USB, Radio, Remote - PPHP2835B"}/>
                  */}
