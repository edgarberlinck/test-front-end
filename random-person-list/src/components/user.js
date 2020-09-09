import React from 'react'
import './user.css'

export default function ({ name, age, avatar }) {
  return <div className='user-card'>
    <div className='picture'>
      <img alt='user-avatar' className='img-fluid' src={avatar} />
    </div>
    <div className='team-content'>
      <h3 className='name'>{name}</h3>
      <h4 className='title'>Age: { age }</h4>
    </div>
  </div>
}