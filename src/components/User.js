import React from 'react'

export default function User(props) {
  return (
    <div>
      {props.data.name} {props.data.age} {props.data.city}
      <img src = {props.data.avatar} />
    </div>
  )
}
