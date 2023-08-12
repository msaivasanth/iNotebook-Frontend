import React from 'react'
// import { useContext } from 'react'
// import noteContext from '../context/notes/noteContext'
function About() {
    // const a = useContext(noteContext)
  return (
    <div className="text-center my-2" style={{fontSize: "40px"}}>
      INotebook helps us to store our notes in cloud database <br/>
      Each User can view his/her notes <br/>
      You can also ADD, DELETE, UPDATE notes
      <br/><br/>
      If you are new to this site, then <strong>SignUp</strong> or else <strong>Login</strong>
    </div>
  )
}

export default About
