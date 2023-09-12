import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import StraightenIcon from '@mui/icons-material/Straighten';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: { md: 2, xs: 1 },
  borderRadius: '30px',
  mt: { xs: 0 },
};

type SizeGuideProps = {
  children?: any;
  img: string;
}

export default function SizeGuideModal(props: SizeGuideProps) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}><StraightenIcon /></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
          <Box sx={{ maxWidth: { md: "none", xs: "400px" }, overflow: "auto", margin: "1rem" }}>
            <LazyLoadImage src={props.img} style={{ overflow: "auto", width: "70vw" }} alt='Size Guide' />
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}