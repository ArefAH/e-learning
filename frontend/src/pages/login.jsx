import React from 'react'
import Input from '../components/base/Input'
import Button from '../components/base/Button'
import '../styles/Login.css'
import { useState } from 'react'

const Login = () => {
  const [username , setUsername] = useState('')
  const [password , setPassword] = useState('')
  return (
    <div className='login'>
    <h1>LOGIN</h1>
    <Input text={'Enter Username'} type={'text'} onChange={(e)=>{setUsername(e.target.value)}}/>
    <Input text={'Enter Password'} type={'password'} onChange={(e)=>{setPassword(e.target.value)}}/>
    <Button onClick={()=>{alert(username, password)}}>LOGIN</Button>
    </div>
  )
}

export default Login