import React from 'react'

const Card = (props) => {
  return (
    <div>
      <h1>{props.id}</h1>
      <h1>{props.name}</h1>
      <p>{props.email}</p>
      <p>{props.phone}</p>
    </div>
  )
}

export default Card;
