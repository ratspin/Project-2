// import React,{useEffect,useState} from "react";

// export default function Test5() {

//     const [users, setusers] = useState([])
//     const [baseImage, setBaseImage] = useState("");
//     const [base, setBase] = useState("");

//     const uploadImage = async (e) => {
//     const file = e.target.files[0];
//     const base64 = await convertBase64(file);
//     setBaseImage(base64);
//     setBase(base64.slice(22));  
//     };
 
//     const convertBase64 = (file) => {
//         return new Promise((resolve, reject) => {
//             const fileReader = new FileReader();
//             fileReader.readAsDataURL(file);
//             fileReader.onload = () => {resolve(fileReader.result);};
//             fileReader.onerror = (error) => {reject(error);};
//     });
//   };

//   console.log(base)


//   var myHeaders = new Headers();
//   myHeaders.append("Content-Type", "application/json");
//   myHeaders.append("Apikey", "zEcGHT26R8S7j7vEkgB4pGe1xgHGuQkt");

//   var requestOptions = {
//     method: 'POST',
//     headers: myHeaders,
//     body: base,
//     redirect: 'follow'
//   };

//   useEffect(() => {
//     fetch("https://api.aiforthai.in.th/thaifood", requestOptions)
//       .then(response => response.text())
//       .then(data => setusers(data))
//       .then(result => console.log(result))
//       .catch(error => console.log('error', error))
//   })
//   console.log(users)



//   return (
//     <div>
//       <input type="file" onChange={(e) => { uploadImage(e);}}/><br></br>
//       <img src={baseImage} alt = "image" height="200px" />
//     </div>
//   );
// }
