import React, { useState } from 'react'

export default function UseStateBasics() {
  //   console.log(useState)
  //   console.log(useState())
  //   const value = useState(1)[0]
  //   const value = useState(1)[1]
  //   console.log(value)

  /**
   * 组件名字不能是小写的
   * hooks方法必须写在组件内部使用
   * hooks方法不要写在条件判断内
   */
  const [text, setText] = useState('Hello React-Hooks')
  const handleClick = () => {
    if (text == 'Hello React-Hooks') {
      setText('hello 米斯特吴')
    } else {
      setText('Hello React-Hooks')
    }
  }

  return (
    <>
      <h1>{text}</h1>
      <button className="btn" onClick={handleClick}>
        change title
      </button>
    </>
  )
}
