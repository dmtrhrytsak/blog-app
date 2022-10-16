import { toast as _toast } from 'react-toastify';

const success = (message: string) => _toast.success(message);
const error = (message: string) => _toast.error(message);
const info = (message: string) => _toast.info(message);
const warning = (message: string) => _toast.warning(message);

export const toast = {
  success,
  error,
  info,
  warning,
};
