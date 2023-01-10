import React from 'react';
import {SeeMoreText,DialogImage,Container} from "./Styled";

const Modal = ({ open, onClose,data }) => {
  if (!open) return null;
  var food_img = "ingredients/" + data + ".png";
  return (
    <div onClick={onClose} >
      <Container onClick={(e) => {e.stopPropagation();}} >

            <DialogImage  src= {food_img} alt="ข้าวหมูแดง"/>   
            <SeeMoreText onClick={onClose}>Close</SeeMoreText>
            
      </Container>
    </div>
  );
};

export default Modal;