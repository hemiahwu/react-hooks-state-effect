import React, { useState, useEffect } from 'react'

export default function UseEffectBasics() {
  const [value, setValue] = useState(0)
  /**
   * useEffect默认是每次的渲染都执行
   * hooks方法不要写在条件判断内
   */

  useEffect(() => {
    console.log('useEffect 被调用')
    if (value > 0) {
      document.title = `您有(${value})条新的消息`
    }
  }, [value]) // 如果给空的数组为第二个参数,那么就初始化执行一次

  console.log('组件渲染')
  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        点击
      </button>
    </>
  )
}
