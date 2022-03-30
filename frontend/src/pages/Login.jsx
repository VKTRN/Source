import {useState} from 'react'
import axios from "axios"
import {loginFailure, loginStart, loginSuccess} from '../redux/userSlice'
import {useDispatch} from 'react-redux'

const Login = () => {
  
  const login = async (user) => {
    dispatch(loginStart())
    try {
      const res = await axios.post('http://localhost:5000/login', user)
      dispatch(loginSuccess(res.data))
    } catch (error) {
      dispatch(loginFailure())
    }
  }

  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const dispatch                = useDispatch()

  return(
    <div className="container">
      <input type="text" onChange={(e) => {setUsername(e.target.value)}}/>
      <input type="password" onChange={(e) => {setPassword(e.target.value)}}/>
      <button onClick ={() => {login({username: username, password:password})}}>Send</button>
    </div>
  )
}

export default Login