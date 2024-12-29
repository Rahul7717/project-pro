import React, { useState } from 'react'

const Page = () => {
  const [text, setText] = useState('Hello')

  const handleClick = () => {
    setText('Hello World')
  }

  return (
    <div>
      <h1>{text}</h1>
      <p>This is Next.js Project</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default Page