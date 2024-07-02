"use client";
import GridLoader from "react-spinners/GridLoader";
const SpinnerContainer2 = () => {
    let size = 35;
    let color = "#f3eeee";   
  return (
    <div className="block mx-auto my-2">
    <GridLoader 
    size={size}
    color={color}
    margin={5}/> 
    </div>
  )
}

export default SpinnerContainer2