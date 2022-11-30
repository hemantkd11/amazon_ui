import React, { useEffect, useState } from "react";

  const View = ()=>{
   
  const [order,setOrder] = useState([])

  const fetchProduct = async () =>{
  const res = await fetch('/list')
  setOrder(await res.json())
  console.log(order)
 }


 useEffect(() =>{
    fetchProduct()
    },[])
    return(
        <div className="list-container">
            <div className="list">
                 
                {order.map((product)=>
                    (<div key={product.id}>
                       <div className="image-pro">
                       <img src={product.image_url}/>
                       </div>
                       <div className="image-pro">
                        {product.title}
                       </div>
                    </div>)
                )}
               
            </div>
        </div>
    )
}

export default View