import React, { useContext, useEffect } from 'react'

import noteContext from '../context/notes/noteContext';
import { useHistory } from 'react-router-dom'

const UserDetails = () => {
  const context = useContext(noteContext)
  const {user, getUser} = context
  let history = useHistory();

  useEffect(() => {
    if(localStorage.getItem('token')){
        getUser();
        //eslint-disable-next-line
    }
    else {
        history.push('/')
    }
    //eslint-disable-next-line
  }, [history])

  return (
    <div className='container'>
      <h1>Name: {user.name}</h1> 
      <br/><br/>
      <h1>Email: {user.email}</h1>
    </div>
  )
}

export default UserDetails
