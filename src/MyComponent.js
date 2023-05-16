import React,{useState} from 'react'

const MyComponent = () => {
    const[text, setText]=useState('')
  return (
    <div>
      <h1> {text}</h1>
      <button onClick={()=>setText('Good Evening')}>Click Me</button>
    </div>
  )
}

export default MyComponent
