import React from 'react';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import CancelIcon from '@material-ui/icons/Cancel';
import SaveIcon from '@material-ui/icons/Save';

const buttonProps = {
  edit_btn: {
    color: 'primary',
    variant: 'contained',
    startIcon: <EditIcon />,
    fullWidth: true,
  },
  delete_btn: {
    color: 'secondary',
    variant: 'contained',
    startIcon: <DeleteIcon />,
    fullWidth: true,
    style: {
      marginLeft: 5,
    },
  },
  create_btn: {
    variant: 'contained',
    startIcon: <AddIcon />,
    color: 'primary',
    style: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
      marginBottom: 5,
    },
  },
  cancel_btn: {
    color: 'primary',
    variant: 'outlined',
    startIcon: <CancelIcon />,
  },
  save_btn: {
    color: 'secondary',
    variant: 'outlined',
    startIcon: <SaveIcon />,
  },
};

const IconButton = ({ onClick, type, text }) => {
  return (
    <Button onClick={onClick} {...buttonProps[type]}>
      {text}
    </Button>
  );
};

export default IconButton;
