import React, { useState } from 'react'

const Product = () => {
const [product,setProduct] = useState({
    image_url:"",
    title:"",
    rating:"",
    price:""
})


const handleInput =  (e) =>{
    console.log(e.target.name, e.target.value)
    setProduct({...product,[e.target.name]: e.target.value})

}
// const [image_url,setImage_url] = useState()
// const [title,setTitle] = useState()
// const [price,setPrice] = useState()
// const [rating,setRating] = useState()



const addProduct = async (e) => {
    e.preventDefault()
    console.log(product)
    const {image_url ,price , rating , title} = product
    const res = await fetch('/product' ,{
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(product)
    })
    const data = await res.json()
    console.log(data)
    return data
}

    return(
        <div className='Product-model'>
            <div className='product'>
                <div className="Logo">
                    <img src="./Amazon-Logo-1.png"/>
                </div>
                <form method='POST'  className='product-details'>
                    <div className='Product-data'>
                      <label> Image_url </label><br/>
                      <input type='text' name="image_url" value={product.image_url} onChange={handleInput}/>
                    </div>
                    <div  className='Product-data'>
                      <label> title </label><br/>
                      <input type='text' name='title' value={product.title} onChange={handleInput}/>
                    </div>
                    <div  className='Product-data'>
                      <label> price </label><br/>
                      <input type='text' name='price' value={product.price} onChange={handleInput}/>
                    </div>
                    <div  className='Product-data'>
                      <label> rating </label><br/>
                      <input type='number' name='rating' value={product.rating} onChange={handleInput}/>
                    </div>
                  <div  className='Product-data'>
                    <button onClick={addProduct}>Add product</button>
                  </div>

                </form>
            </div>
        </div>
    )
}
export default Product