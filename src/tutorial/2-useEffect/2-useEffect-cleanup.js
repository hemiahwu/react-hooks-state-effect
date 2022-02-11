import React, { useState, useEffect } from 'react'

export default function UseEffectCleanup() {
  const [size, setSize] = useState(window.innerWidth)
  const checkSize = () => {
    setSize(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', checkSize)

    // 清理
    return () => {
      console.log('清理')
      window.removeEventListener('resize', checkSize)
    }
  }, [])
  return (
    <>
      <h1>Window的可视宽度</h1>
      <h2>{size}</h2>
    </>
  )
}
