// import Setup from './tutorial/1-useState/5-useState-counter'
import React, { useState } from 'react'
import { users } from './data'
import List from './List'

function App() {
  const [people, setPeople] = useState(users)
  return (
    <main>
      <section className="container">
        <h3>以下是{people.length}个人的生日</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>清除</button>
      </section>
    </main>
  )
}

/**
 * 无状态组件 (函数)
 * 有状态组件 (类)
 */

export default App
