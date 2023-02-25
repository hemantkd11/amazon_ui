import React,{useState} from 'react'

const Navbars =()=>{

    
        const [isMobile,setIsMobile] = useState(false)
  return (
    <>
   <nav className='navbar'>
    <div className='logo'><img src="./amazon-smile.png"/></div>
    <ul className={isMobile ? "nav-link-mobile" : "nav-link"}
    onClick={()=> setIsMobile(false)}>
      <li className='home'><a href='https://www.youtube.com/watch?v=3ncFpP8GP4g'>Home</a></li>
      <li className='about'>About</li>
      <li className='profile'>Profile</li>
      <li className='contact'>Contact</li>
      <li className='details'>Deatils</li>
    </ul>
    <div className='click-btn'>
    <button className='signup'>Sign-Up</button>
    <button className='mobile-menu-icon' onClick={()=>setIsMobile(setIsMobile? true : false)}>
       {isMobile ? <i className='fas fa-times'></i> : <i className='fas fa-bars'></i>}
    </button>
   
    </div>
 
   </nav>
   
   </>
 
  );

} 
export default Navbars


