import React from 'react'
import { useState } from 'react'
import {Form, FormGroup, FormFeedback, Label, Button, Input} from 'reactstrap'

export const Login = ({setIsLoggedIn}) => {
          const [username,setUsername]=useState("")
          const [password,setPassword]=useState("")
          const [isValidUsername, setIsValidUsername]=useState(null)
          const [isValidPassword, setIsValidPassword]=useState(null)

          const handleCheckUsername=()=>{
                    // console.log(username, import.meta.env.VITE_USERNAME);
                    username==import.meta.env.VITE_USERNAME ? setIsValidUsername(true) : setIsValidUsername(false)
                    console.log(isValidUsername);
          }
          const handleLogin=()=>{
                    if(password==import.meta.env.VITE_PW){
                              setIsValidPassword(true)
                              console.log('sikeres bejelentkezés!');
                              setIsLoggedIn(true)
                    }else
                    setIsValidPassword(false)
                    
          }

  return (
    <Form className='login border p-3 shadow mt-1 rounded'>
       <FormGroup>
    <Label for="username">Username:</Label>
    <Input id="username" autoFocus 
    value={username}
    onChange={(e)=>setUsername(e.target.value)} 
    onBlur={handleCheckUsername}
    className={isValidUsername==null ? "" : (isValidUsername ? "is-valid" : "is-invalid")}
    />
    <FormFeedback >Helytelen felhasználónév!</FormFeedback>
    </FormGroup>

    <FormGroup>
    <Label for="password">Password:</Label>
    <Input id="password" type='password'
    value={password}
    onChange={(e)=>setPassword(e.target.value)} 
    className={isValidPassword==null ? "" : (isValidPassword ? "is-valid" : "is-invalid")}
    />
    <FormFeedback >Helytelen jelszó!</FormFeedback>
    </FormGroup>

    <div>
    <Button type="button"
    color="primary" 
    onClick={handleLogin} 
    disabled={!password || !isValidUsername}>
       Login
    </Button>
    </div>
    </Form>
  )
}


