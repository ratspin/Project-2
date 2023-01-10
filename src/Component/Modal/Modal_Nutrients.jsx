import React from 'react';
import {SeeMoreText,DialogImage,Container} from "./Styled";

const Modal = ({ open, onClose,data }) => {
  if (!open) return null;
  var food_img = "nutrients/" + data + ".png";
  return (
    <Container onClick={onClose} >
      <div onClick={(e) => {e.stopPropagation();}} >
              
            <DialogImage  src= {food_img} alt="ข้าวหมูแดง"/>   
            <SeeMoreText onClick={onClose}>Close</SeeMoreText>
            
      </div>
    </Container>
  );
};

export default Modal;