import React from 'react';
import sun from '../images/sun.png'
import moon from '../images/moon.png'
import clouds from '../images/clouds.png'

export default function WeatherIcons() {
  return (
    <div>
         <span style={{display:"flex",flexWrap:"wrap" ,flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
      <img className="img-fluid opacity-50" src={sun} alt="..." style={{height:'10rem',width:"10rem"}}/>
      <img className="img-fluid opacity-50" src={clouds} alt="..."  style={{height:'10rem',width:"10rem"}}/>
      <img className="img-fluid  opacity-25" src={moon} alt="..." style={{height:'10rem',widht:"10rem"}}/>
 </span>  
    </div>
  )
}
