import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

interface CheckoutErrorModalProps {
  open: boolean;
  onClose: () => void;
}

const CheckoutErrorModal: React.FC<CheckoutErrorModalProps> = ({
  open,
  onClose,
}) => {
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
          Error
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Please check you have entered your name, email and payment confirmation
        </Typography>
        <Button variant="contained" onClick={onClose} sx={{ mt: 2 }}>
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default CheckoutErrorModal;
