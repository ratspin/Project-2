import React from 'react';
import imageToBase64 from 'image-to-base64/browser';


export default function Test4() {

    imageToBase64("food/ปลาเก๋าลวกจิ้ม.png") // Path to the image
    .then((response) => {
            console.log(response); // "cGF0aC90by9maWxlLmpwZw=="
        }
    )
    .catch((error) => {
            console.log(error); // Logs an error if there was one
        }
    )


    return (
        <>5555</>

    );

}