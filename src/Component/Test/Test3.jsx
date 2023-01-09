import React, { useState } from "react";
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';


// import { data } from './data.js';



export default function BasicRating() {
    var data = require('../../calculatetion/food.json');

    const [search, setSearch] = useState('');

    var name = []
    for(var i = 0 ; i < data.length ; i ++ ){
        var food = data[i]["อาหาร"]
        name.push({name : food });
    }

    var food_name = []
    var food_img = []
    var food_ingr = []
    var food_nutr = []
    var showinfo = []
 
    for(var i = 0; i < name.length; i++) {
    food_img = "food/"+ name[i].name + ".png"
    food_ingr = "ingredients/"+ name[i].name + ".png"
    food_nutr = "nutrients/"+ name[i].name + ".png"
    food_name = name[i].name
    showinfo.push({food_img:food_img,food_nutr:food_nutr,food_ingr:food_ingr,food_name:food_name})
    }

    const show = showinfo.filter((item) => {return search.toLowerCase() === ''? item: item.food_name.toLowerCase().includes(search);})
    console.log(show);

    return (

    <div>
    <Container>
        <Form>
        <InputGroup className='my-3'>


            <Form.Control
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Search contacts'
            />
        </InputGroup>
        </Form>
        <Table striped bordered hover>
        <thead>
            <tr>
            <th>อาหาร</th>
            <th>รูป</th>
            <th>วัตถุดิบ</th>
            <th>โภชนาการ</th>
            </tr>
        </thead>
        <tbody>
            {show.map((item, index) => (
                <tr key={index}>
                <td>{item.food_name}</td>
                {/* <td>{item.food_img}</td>                
                <td>{item.food_ingr}</td>                
                <td>{item.food_nutr}</td> */}
                <td><img style={{ width: "80px", height: "80px" }}  src={item.food_img} alt= {item.food_name} />   </td>
                <td><img style={{ width: "80px", height: "80px" }}  src={item.food_ingr} alt= {item.food_name}/>  </td>             
                <td><img style={{ width: "80px", height: "80px" }}  src={item.food_nutr} alt= {item.food_name}/>  </td>     
               
                </tr>
            ))}
        </tbody>
        </Table>
    </Container>
    </div>
  );
}


