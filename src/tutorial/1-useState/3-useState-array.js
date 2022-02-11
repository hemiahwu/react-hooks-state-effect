import React from 'react'
import { data } from '../../data'

export default function UseStateArray() {
  const [people, setPeople] = React.useState(data)
  const removeItem = (id) => {
    // let newPeople = people.filter((person) => person.id !== id)
    // setPeople(newPeople)

    setPeople((oldPeople) => {
      let newPeople = oldPeople.filter((person) => person.id !== id)
      return newPeople
    })
  }
  return (
    <>
      {people.map((person) => {
        const { id, name } = person

        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>删除</button>
          </div>
        )
      })}

      <button className="btn" onClick={() => setPeople([])}>
        清除所有
      </button>
    </>
  )
}
