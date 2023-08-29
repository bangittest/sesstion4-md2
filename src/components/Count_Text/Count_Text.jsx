import React, { useState } from 'react'

export default function Count_Text() {
    const[text,setText]=useState("")
    const characterCount=text.replace(/\s/g, '').length
  return (
    <>
    <h1>đếm số ký tự</h1>
    <textarea
    placeholder='enter text'
    value={text}
    onChange={(e)=>setText(e.target.value)}
    >    
    </textarea>
    <p>so ki tu :{characterCount}</p>
    </>
  )
}
