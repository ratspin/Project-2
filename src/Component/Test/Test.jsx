import React from 'react';
var stringSimilarity = require("string-similarity");

export default function PopupGfg() {

    var data = require("../../calculatetion/food.json");
    var name = [];
    for (var index = 0; index < data.length; index++) {
      name.push(data[index]["อาหาร"]);
    }

 
    var foodname = "ข้าวหมก"

    const result = stringSimilarity.findBestMatch(foodname,name)
    console.log(result); 


    return (
        <div style={{ margin: '30%' }}>
                    555555
        </div>
    )
};

