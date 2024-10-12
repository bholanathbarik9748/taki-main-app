import {
  isEmailValid,
  isPasswordValid,
} from '../../../utils/Validation/InputValidation';
import {LoginBody, LoginFieldsError} from '../types/login';

export const isValidLoginBody = (
  formData: LoginBody,
  setError: React.Dispatch<React.SetStateAction<LoginFieldsError>>,
): boolean => {
  let isValid: boolean = true;

  // Ensure the email is provided and valid
  if (!formData?.email || !isEmailValid(formData?.email)) {
    isValid = false;
    setError(prev => ({...prev, email: true}));
  }

  // Ensure the password is provided and valid
  if (!formData?.password || !isPasswordValid(formData?.password)) {
    isValid = false;
    setError(prev => ({...prev, password: true}));
  }

  // Both email and password are valid
  return isValid;
};
