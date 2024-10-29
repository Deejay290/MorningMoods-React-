import { useState } from "react";
import { useEffect } from "react";
import './index.css';
function UpdateDay(){
  const Days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const [storedDay, setDay] = useState('');
  const getDay = () =>{
    const TheDay = new Date(); //Creates the date object
    const currentDay = Days[TheDay.getDay()];// This returns the day of the week from our array Days using the getDay method. The getday method returns the day of the week from index 0-6, starting at sunday and ending on saturday.
    setDay(currentDay);
  }
  useEffect (() => {
    getDay();
  },[]);
  return (
    <>
      <h3 className ='Day'>{storedDay}</h3>


    </>
  )
}
export default UpdateDay;