import React, { useState } from 'react'

export default function UseStateCounter() {
  const [value, setValue] = useState(0)
  const complexIncrease = () => {
    setTimeout(() => {
      // setValue(value + 1)
      setValue((prevState) => {
        return prevState + 1
      })
    }, 2000)
  }
  return (
    <>
      <section style={{ margin: '4rem 0' }}>
        <h2>计数器</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={() => setValue(value - 1)}>
          -
        </button>
        <button className="btn" onClick={() => setValue(0)}>
          重置
        </button>
        <button className="btn" onClick={() => setValue(value + 1)}>
          +
        </button>
      </section>

      <section style={{ margin: '4rem 0' }}>
        <h2>计数器</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={complexIncrease}>
          延时计数
        </button>
      </section>
    </>
  )
}
