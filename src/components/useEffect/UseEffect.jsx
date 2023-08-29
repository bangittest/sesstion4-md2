import React, { useEffect, useState } from "react";

export default function UseEffect() {
  //Cach 1:useEffect(callback)
  // +callback dc goi khi component dc mounted
  // +callback dc goi khi component dc gan vao DOM
  // +callback dc goi khi state dc thay doi=>it dung
  //cach2:useEffect(callback,[])
  //+callback dc goi khi component dc mounted
  //+callback chi duoc goi trong lan dau tien component dc render<=> tuong duong voi componenDidMount trong lifecycle
  //cach3:useEffect(callback,[deps])
  //+callback dc goi khi component dc mounted
  //+callback dc goi khi dependency(co the la state,props hoac du lieu khac)thay doi

  const [name, setName] = useState("");
  const [email, setEmail] = useState(" ");

  // useEffect(()=>{
  //     //Thay doi tieu de tren tad trinh duyet
  //     document.title=name;
  //     console.log('use effect dc goi...');
  // })

  // cach 2
  // useEffect(()=>{
  //     //phu hop cho viec goi APi de hien thi thong tin
  //     console.log("useEffect dc goi...");
  // },[])

  //cach 3
  useEffect(() => {
    console.log("useEffect o cach 3 dc goi...",name);
  }, [name]);
  useEffect(() => {
    console.log("useEffect o cach 3 dc goi...",email);
  }, [email]);//su dung toan tu === de so sanh


  const handleSubmit=(e)=>{
    e.preventDefault();
    const newUser={
        name:name,
        email:email
    };
    localStorage.setItem('user',JSON.stringify(newUser));
    console.log(newUser);
  }
  return (
    <>
      {console.log("render lan dau:")}
     <form onSubmit={(e)=>{handleSubmit(e)}}>
     <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">button</button>
     </form>
    </>
  );
}
