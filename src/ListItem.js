import React from 'react';
import Checkbox from '@mui/material/Checkbox';

var ListItem = (props) => {
  return (
    <div>
      <Checkbox />
      {props.item}
    </div>
  );
};

export default ListItem;
