import styled from "styled-components";

export const Container = styled.div`
  max-width: 600px;
  width: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  background-color: #ffffff;
  box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.75);
  border-radius: 8px;
  flex-direction: column;
  padding: 10px;
`;

export const DialogImage = styled.img`
  object-fit: cover;
  max-height: 500px;
  padding: 10px;
`;

export const SeeMoreText = styled.span`
  color: #eb3300;
  font-size: 18px;
  text-align: center;
  border: solid 1px #eb3300;
  border-radius: 3px;
  padding: 10px 15px;
  cursor: pointer;
  margin-bottom: 12px;
  // width: 30%;
`;
