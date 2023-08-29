import React, { useState } from 'react'


const total=[100,200,300,400]
export default function UseState_Comp() {
    //pham vi viết code javascrip
    const [count,setCount]=useState(()=>{
        //đối với initialState là 1 call back thì nó sẽ return thì nó sẽ lấy giá trị được return từ callback initialSate
        const totalCount=total.reduce((prevValue,currentValue)=>{
            return prevValue+currentValue
        },0)

        return totalCount
    });

    console.log("re-render");

    //ham xu  li tang
    const handleCont=()=>{
        //cap nhat state lai gia tri cua state
        setCount(count+1);
    }
  return (
    <>
    <h1>State:{count}</h1>
    <button onClick={handleCont}>Count</button>
    </>
  )
}
