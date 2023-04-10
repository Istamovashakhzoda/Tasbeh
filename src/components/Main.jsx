import { useState } from "react";
import { FaMoon, FaUssunnah } from 'react-icons/fa';
import bomdod from "../assets/images/bomdod.webp"
import namoz from "../assets/images/peshin.webp"
import asr from "../assets/images/asir.webp"
import shom from "../assets/images/shom.webp"
import xufton from "../assets/images/xufton.webp"

function Main() {
  const[count, setCount] = useState (0);
  const [sumCount, setSumCount] = useState(0);
  const handleClick = () =>{
    setCount(count +1);
    setSumCount (sumCount+1);
      if(count == 99){
        setCount(0)
      }}  
       
      const [kun ,setKun] = useState(true);
      const [tun, setTun] = useState(false)

      const resentClick = () =>{
        setCount(0);
        setSumCount(0)
      };

      const toogleClick = () =>{
        if (kun){
          setKun(false);
        }else{
          setKun(true)
        }

        if (tun){
          setTun(false)
        }else{
          setTun(true)
        };
      };
  return (
    <div className="main"
    style={{backgroundColor: tun ? "#000" : "rgb(114, 114, 229)"}}>
      <div className="header">
      <div className="btn" onClick={resentClick}>
        <button>Reset</button>
      </div>
      <div className="theme">
        <div className="themeContainer" style={{display:"flex"}}>
         {
          kun ?(
            <FaMoon onClick={toogleClick} style={{width:"50px",height:"60px"}} />
          ) : (
            <FaUssunnah  onClick={toogleClick}  style={{width:"50px",height:"60px", marginLeft:"4px"}} />
          )
         }
        </div>
      </div>
    </div>
    {/* --------------------------------------------------------------------------------------- */}
      <div className="container">
        <div className="smallContainer">
          <div className="left">
            <span>الجميع:</span> {sumCount}
          </div>
          <div className="right">
            <div>{count}</div> / <div>99</div>
          </div>
        </div>
        <div className="circle"
          onClick={handleClick}
          style={{backgroundColor: tun ? "#000" : "rgb(114, 114, 229)"}}>{count}</div>
          <div className="inpray">
            <p>صلاة الفجر</p>
            <p>صلاة الظهر</p>
            <p>صلاة الأسير</p>
            <p>صلاةالمغرب</p>
            <p>صلاة العشاء</p>
          </div>
          <div className="pray">
           <img src={bomdod} alt="" />
            <img src={namoz} alt="" />
            <img src={asr} alt="" />
            <img src={shom} alt="" />
            <img src={xufton} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Main;