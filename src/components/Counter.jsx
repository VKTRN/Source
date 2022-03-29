import { useSelector } from "react-redux";


const Counter = () => {

  const count = useSelector(state => state.value)

  return(
    <div className="counter">{count}</div>
  )
}

export default Counter