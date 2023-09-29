import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

interface CartErrorModalProps {
  open: boolean;
  onClose: () => void;
}

const CartErrorModal: React.FC<CartErrorModalProps> = ({
  open,
  onClose,
}) => {

  const navigate = useNavigate();

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: '5px'
        }}
      >
        <Typography variant="h6" component="h2">
          {/* <strong>Empty Cart</strong> */}
          <strong>SALES HAVE ENDED</strong>
        </Typography>
        <Typography sx={{ mt: 2 }}>
          {/* Please add at least one item to the cart before proceeding to checkout */}
          Sales for 2023 UNSW EngSoc Merch has closed. You can no longer purchase any items.
        </Typography>
        {/* <Typography sx={{ mt: 1, fontSize: 10 }}>
          <em>You can't buy nothing now, can you?</em>
        </Typography> */}
        <Button variant="contained" onClick={() => navigate('/')} sx={{ mt: 2, mr: 2 }}>
          {/* Go Shopping */}
          Close
        </Button>
      </Box>
    </Modal >
  );
};

export default CartErrorModal;
