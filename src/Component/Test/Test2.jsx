import React,{useEffect,useState} from "react";


export default function Test() {


  const [users, setusers] = useState([])

  const text = "ตมยำกุง";
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
      .then(data => setusers(data))
      // .then(result => console.log(result))
      // .catch(error => console.log('error', error))
  })
  console.log(users)





  return (
    
    <div>
55555555

  </div>
  )
}





