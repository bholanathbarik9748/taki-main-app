// Email Validation Function
export const isEmailValid = (email: string): boolean => {
  // Regular expression for validating an email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Password Validation Function
export const isPasswordValid = (password: string): boolean => {
  // Check if the password is at least 6 characters long
  // You can add more conditions as needed (e.g., contain numbers, uppercase, etc.)
  const minLength = 6;
  return password.length >= minLength;
};
