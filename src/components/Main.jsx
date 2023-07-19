import React from 'react'
import Sub from './Sub'

function Main({ treasure }) {
  console.log(treasure)
  return (
    <div>
        <p>This is the main component</p>
        <Sub treasure={treasure} />
    </div>
  )
}

export default Main