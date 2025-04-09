import { Dialog, DialogContent } from '@mui/material';
import { useModalStore } from '../../../store/modal.store';


const GlobalModal = () => {
  const { open, content, closeModal } = useModalStore();

  return (
    <Dialog open={open} onClose={closeModal} maxWidth="xs" fullWidth >
      <DialogContent sx={{px:1, pt:2, pb:2}}>{content}</DialogContent>
    </Dialog>
  );
};

export default GlobalModal;