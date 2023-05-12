import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function generateToast(message, type) {
  // Use an object to map the type to the toast function
  const toastFunctions = {
    success: toast.success,
    error: toast.error,
    warning: toast.warn
  };

  // Use the default toast function if the type is not valid
  const toastFunction = toastFunctions[type] || toast;

  // Call the toast function with the message and return its ID
  return toastFunction(message, {
    position: toast.POSITION.TOP_RIGHT
  });
}
