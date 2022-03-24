import React from 'react';
import  Content from "./Content";
import  Footer from "./Footer";
import video from "../Image/video.mp4";
import Navbar from './Navbar';
const Home=()=>{
    return (
 
        <div> 
       <video autoPlay loop muted id='video'>
        <source src={video} type ='video/mp4'/>
      </video>
      
      <Navbar/> 
        <Content/>
        <Footer/>
       </div>
    );

}
export default Home