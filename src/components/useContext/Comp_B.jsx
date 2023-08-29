import React, { useContext } from "react";
import {ThemeContext} from "./UseContext"

export default function Comp_B() {
    const them=useContext(ThemeContext)//buoc 3
  return (
    <div>
      <p className={them}> 
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
        blanditiis facere animi vitae inventore, neque rem accusamus explicabo
        itaque quod et aspernatur, cumque assumenda necessitatibus minus enim
        omnis deleniti atque!
      </p>
    </div>
  );
}
