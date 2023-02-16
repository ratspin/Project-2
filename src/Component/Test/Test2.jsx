import React,{useEffect,useState} from "react";


export default function Test() {


  const [food64, setfood64] = useState([])

  const text = "กุ้ชุปแป้งทอด";
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
  myHeaders.append("Apikey", "zEcGHT26R8S7j7vEkgB4pGe1xgHGuQkt");
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    redirect: 'follow'
  };
  useEffect(() => {
    fetch(`https://api.aiforthai.in.th/wordapprox?word=${text}&model=food`, requestOptions)
      .then(response => response.text())
      .then(data => setfood64(data))
      // .then(result => console.log(result))
      // .catch(error => console.log('error', error))
  })
  console.log(food64)





  return (
    
    <div>
55555555

  </div>
  )
}






