import React from 'react'
//whatever is in argument ie. called props
export default function FunctionalCompExample(p1)
 {
  return (
    <div>
        <h1> welcome to functional component</h1>
        <p> {p1.name}</p>
        <p> {p1.code}</p>
    </div>
  )
}
