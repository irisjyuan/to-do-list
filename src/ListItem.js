import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

var ListItem = (props) => {
  return (
    <div>
      <Checkbox />
      {props.item}
      <IconButton onClick={() => props.removeItem(props.index)}>
        <DeleteIcon />
      </IconButton>
    </div>
  );
};

export default ListItem;
