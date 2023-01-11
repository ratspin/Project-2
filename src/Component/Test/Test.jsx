import { useState } from "react";
var data = require('../../calculatetion/food.json');

export default function App() {
  const [value, setValue] = useState("");

  // const onChange = (event) => {
  //   setValue(event.target.value);
  // };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    // our api to fetch the search result
    console.log("search ", searchTerm);
  };

  var name = [];
  for (var i = 0; i < data.length; i++) {
    var food = data[i]["อาหาร"];
    name.push({ name: food });
    console.log(value);
  }
  
  return (
    <div >
        <div >
          <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
          <button onClick={() => onSearch(value)}> Search </button>
        </div>

        <div>
          {name.filter((item) => {
            const searchTerm = value.toLowerCase();
            const fullName = item.name.toLowerCase();
              return (searchTerm &&fullName.startsWith(searchTerm) &&fullName !== searchTerm);}).slice(0, 10)
              .map((item) => (
              <div onClick={() => onSearch(item.name)} key={item.name}>{item.name}</div>))}
        </div>
    </div>
  );
}
