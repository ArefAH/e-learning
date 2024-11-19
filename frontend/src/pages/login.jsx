import React from 'react'
import Input from '../components/base/Input'
import Button from '../components/base/Button'
import { useState } from 'react'

const Login = () => {
  const [username , setUsername] = useState('')
  const [password , setPassword] = useState('')
  return (
    <>
    <h1>login</h1>
    <Input text={'Enter Username'} type={'text'} onChange={(e)=>{setUsername(e.target.value)}}/>
    <Input text={'Enter Password'} type={'password'} onChange={(e)=>{setPassword(e.target.value)}}/>
    <Button onClick={console.log(username, password)}>Login</Button>
    </>
  )
}

export default Login