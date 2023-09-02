import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import NeelDutta from '../assets/NeelDutta.png';
import SizeGuide from '../assets/SizeGuide.png'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '30px',
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
      <Button onClick={handleOpen}>SIZE GUIDE</Button>
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
<<<<<<< f8d8e5e9e99c040cb14d95cf49bff8426ab1f70a
          <Box sx={{ borderRadius: "30px", maxWidth: { md: "none", xs: "400px" }, overflow: "auto", padding: "1rem" }}>
            <img src={props.img} alt='Size Guide' />
=======
          <Box sx={{ borderRadius: "30px", maxWidth: { md: "none", xs: "400px" }, overflow: "auto" }}>
            <img src={SizeGuide} alt='Size Guide' />
>>>>>>> 3d45114f3e174f877c1445224461e0aa6716acfb
          </Box>
        </Box>
      </Modal>
    </div>
  );
}