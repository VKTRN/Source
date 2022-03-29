import './scss/custom.scss';
import Counter from './components/Counter'
import { useDispatch } from "react-redux";
import {add, subtract, addNumber} from './redux/countSlice'
import {useState} from 'react'

function App() {

  const handleAdd = () => {
    dispatch(add())
  }

  const handleSubtract = () => {
    dispatch(subtract())
  }

  const handleClick = () => {
    dispatch(addNumber(value))
  }

  const dispatch = useDispatch()
  const [value, setValue] = useState()

  return (
    <div className="app">
      <div className="container">
        <div className="buttons">
          <button onClick={handleAdd}>+ 1</button>
          <button onClick={handleSubtract}>- 1</button>
          <div>
            <input type="number" onChange={(e) => {setValue(parseInt(e.target.value))}}/>
            <button id='add' onClick={handleClick}>add</button>
          </div>
        </div>
        <Counter/>
      </div>
    </div>
  );
}

export default App;