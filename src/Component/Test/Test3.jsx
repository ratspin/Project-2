import React, { useState } from 'react';

var data = require('../../calculatetion/food.json');

export default function Dss() {

  const [search, setSearch] = useState('');
 
  var name = [];
  for (var i = 0; i < data.length; i++) {
    var food = data[i]["อาหาร"];
    name.push({ name: food });
  }


  return (
    <div>
            <input onChange={(e) => setSearch(e.target.value)}/>
            
            {name.filter((item) => {return search === ''? item: item.name.toLowerCase().includes(search);}).slice(0, 10)
              .map((item, index) => (<div key={index}>{item.name}</div>
            ))}
    </div>
  );
}
