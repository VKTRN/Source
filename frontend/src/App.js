import {useState} from "react"
import './scss/custom.scss';
import axios from "axios"

function App() {

  const postItem = async() => {
    try {
      set_name("")
      await axios.post("http://localhost:5000/api/items/", { name: name });

    } catch (err) {
      console.log(err);
    }
  }

  const getItems = async() => {
    try {
      const res = await axios.get("http://localhost:5000/api/items/");
      set_items(res.data)

    } catch (err) {
      console.log(err);
    }
  }

  const [name, set_name] = useState("")
  const [items, set_items] = useState([])


  return (
    <div className="App">
      <input className="name-input" type="text" value={name} onChange={(e) => set_name(e.target.value)} />
      <button onClick={postItem}>post Item</button>
      <button onClick={getItems}>get Items</button>
      <div className="content">
        {items.map((item) => {
          return <div className="item">{item.name}</div>
        })}
      </div>
    </div>
  );
}

export default App;