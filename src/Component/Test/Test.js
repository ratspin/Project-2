import * as React from 'react';
import Rating from '@mui/material/Rating';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function BasicRating() {
  const [rating0, setrating0] = React.useState(0);
  console.log(rating0);
  return (
      <Rating sx={{'& .MuiRating-iconFilled': {color: 'orange',},'& .MuiRating-iconFocus': {color: 'orange',}}} value={rating0} onChange={(e, newValue) => {setrating0(newValue);}}/>

  );
}