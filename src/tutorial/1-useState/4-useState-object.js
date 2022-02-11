import React, { useState } from 'react'

export default function UseStateObject() {
  const [person, setPerson] = useState({
    name: '老吴',
    age: 34,
    message: '前端开发',
  })

  //   const [name, setName] = useState('老吴')
  //   const [age, setAge] = useState(34)
  //   const [message, setMessage] = useState('前端开发')

  const changeMessage = () => {
    setPerson({ ...person, age: 20 })
    // setMessage('Hello World')
  }

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>

      <button className="btn" onClick={changeMessage}>
        change message
      </button>
    </>
  )
}
