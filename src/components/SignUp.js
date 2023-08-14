import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const SignUp = (props) => {
  const [credentials, setCredentials] = useState({name:"", email: "", password: "", cpassword:""})
  let history = useHistory();

  const handleSubmit = async (e) => {
      e.preventDefault();
      let {name, email, password} = credentials
      const response = await fetch("https://happy-tick-outfit.cyclic.app/api/auth/createuser", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
      
          body: JSON.stringify({name, email, password}), // body data type must match "oCntent-Type" header
        });
        const note = await response.json();
        // console.log(note.authToken)
        if(note.success) {
          localStorage.setItem('token', note.authToken);
          history.push('/')
          props.showAlert("Signed in successfully", "success")
        }
        else {
          props.showAlert("Invalid Credentials", "danger")
          // props.showAlert("Username and Password must be atleast 5 characters to SignUp", "danger")
        }
      //   setCredentials({email: "", password:""})

        console.log(note);

  }
  const onChange = (e)=>{
      setCredentials({...credentials, [e.target.name]: e.target.value})
  }
  return (
    <div className='my-3'>
      <h2 className='my-2'>Sigin to continue iNotebook</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" name='name' value={credentials.name} onChange={onChange} aria-describedby="emailHelp"/>
          <div id="passwordHelpBlock" className="form-text">
            Your username must be  atleast 5 characters long.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" name='email' value={credentials.email} onChange={onChange} aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name='password' value={credentials.password} onChange={onChange}/>
          <div id="passwordHelpBlock" className="form-text">
            Your password must be atleast 5 characters long.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" id="cpassword" name='cpassword' value={credentials.cpassword} onChange={onChange}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default SignUp
