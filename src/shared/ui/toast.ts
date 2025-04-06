import { toast, ToastOptions } from 'react-toastify';

const baseConfig: ToastOptions = {
  position: 'top-right',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: 'colored',
};

export const showSuccess = (message: string) => toast.success(message, baseConfig);
export const showError = (message: string) => toast.error(message, baseConfig);
export const showInfo = (message: string) => toast.info(message, baseConfig);
export const showWarning = (message: string) => toast.warning(message, baseConfig);