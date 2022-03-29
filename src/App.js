import './scss/custom.scss';
import Counter from './components/Counter'
import { useDispatch } from "react-redux";
import {add, subtract} from './redux/countSlice'

function App() {

  const handleAdd = () => {
    dispatch(add())
  }

  const handleSubtract = () => {
    dispatch(subtract())
  }

  const dispatch = useDispatch()

  return (
    <div className="app">
      <div className="container">
        <div className="buttons">
          <button onClick={handleAdd}>add</button>
          <button onClick={handleSubtract}>subtract</button>
        </div>
        <Counter/>
      </div>
    </div>
  );
}

export default App;