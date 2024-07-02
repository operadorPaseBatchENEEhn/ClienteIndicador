"use client";
import RiseLoader from "react-spinners/RiseLoader";
const SpinnerContainer = () => {
    let size = 10;
    let color = "#22e8ea";      
  return (
    <div className="block mx-auto my-2">
    <RiseLoader 
    size={size}
    color={color}
    margin={5}/> 
    </div>
  )
}
export default SpinnerContainer;