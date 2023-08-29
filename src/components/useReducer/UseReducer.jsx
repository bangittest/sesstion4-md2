import React, { useReducer, useState } from "react";

//useState
//+khai bao gia tri khoi tao
//+bat su kien tang giam xu ly

//useReducer
//+khai bao gia tri khoi tao
//+bat su kien tang giam xu ly
//+tao reducer de xu ly logic
//+truyen disspath

//b1 khai bao gia tri khoi tao
const initialValue = 0;
//b2 tao cac hanh dong
const UP_ACTION = "up";
const DOWN_ACTION = "down";
export default function UseReducer() {
  // const[count,setCount]=useState(0)

  //b3:tao ham reducer
  /**
   * ham reducer
   * @param {*} state state hien tai
   * @param {*} action hanh dong
   */
  const reduce = (state, action) => {
    switch (action) {
      case UP_ACTION:
        return state + 1;
      case DOWN_ACTION:
        return state - 1;
      default:
        return state;
    }
  };
  //b4:goi ra reducer
  const [count,dispatch]=useReducer(reduce,initialValue);

  // //ham xu ly tang
  // const handleIcrease=()=>{
  //     setCount(count+1)
  // }

  // //ham xu ly giam
  // const handleDecrease=()=>{
  //     setCount(count-1)
  // }

  return (
    <>
      <h3>{count}</h3>
      <div>
        <button onClick={()=>dispatch(UP_ACTION)}>tang</button>
        <button onClick={()=>dispatch(DOWN_ACTION)}>giam</button>
      </div>
    </>
  );
}
