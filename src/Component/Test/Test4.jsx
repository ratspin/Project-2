// import React from 'react';

// import FileBase64 from './Test5';


// export default class Test4 extends React.Component {
//   constructor() {super()
//     this.state = {
//       files: []
//     }
//   }

//   getFiles(files){
//     this.setState({ files: files })
//   }

//   render() {
    
//     return (
//       <div>

//         <h1 >React File to Base64 Converter</h1>

//         <div >
//           <p > * Try To Upload Some Image~</p>
          
//           <FileBase64 multiple={ true } onDone={ this.getFiles.bind(this) } />
//         </div>

//         <div >
//           { this.state.files.map((file,i) => {return <img key={i} src={file.base64} />}) }<img src=""  />
//         </div>

//         { this.state.files.length !== 0 ?
//           <div>
//             <h3 >Callback Object</h3>
//             <div >
//               <pre>{ JSON.stringify(this.state.files, null, 2) }</pre>
//             </div>
//           </div>
//         : null }
//       </div>
//     )

//   }

// }

