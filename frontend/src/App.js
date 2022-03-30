import './scss/custom.scss';
import { useSelector } from "react-redux";
import {useState} from 'react'
import Login from './pages/Login'
import axios from 'axios'

function App() {

  const enterSecret = async () => {

    const userRequest = axios.create({
      baseURL: "http://localhost:5000",
      headers: {token: `Bearer ${user.accessToken}`}
    })

      try {
        const res = await userRequest.get('/secret' + user.id)
        setSecret(res.data.secret)
      } catch (error) {
        console.log(error)
      }
  }

  const user = useSelector((state) => state.currentUser)
  const [secret, setSecret] = useState("")

  return (
    <div className="app">
      <Login/>
      <p className='token-container'>
        {user?.accessToken}
        <span className='title'>Access Token</span>
      </p>
      {user && <button onClick={enterSecret}>Enter the secret</button>}
      {secret && <span>{secret}</span>}
    </div>
  );
}

export default App;