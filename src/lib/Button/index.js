import React from 'react';
import logo from '../media/wallboard.png'
import mylogo from '../media/amit.jpg'
const Button = ({ text }) => {
 return(
  <div>
  <img src={logo} alt="wallboard"/>
  <img src={mylogo} alt="amit pathak"/>
  <button>{text}</button>;
  </div>
 );
}
export { Button };
