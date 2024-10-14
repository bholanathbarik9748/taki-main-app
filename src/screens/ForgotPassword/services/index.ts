import {axiosInstance} from '../../../utils/Interceptor/Interceptor';
import {
  forgotPasswordForm,
  forgotPasswordApiBody,
  forgotPasswordSendEmailApiBody,
} from '../types/ForgotPasswordType';

export const ForgotPassword = async (FormData: forgotPasswordForm) => {
  const reqBody: forgotPasswordApiBody = {
    email: FormData.email,
    otp: FormData.otp,
    password: FormData.newPassword,
  };

  try {
    const response = await axiosInstance.post('/Auth/forgot-password', reqBody);
    return response?.data;
  } catch (error) {
    throw error;
  }
};

export const sendForgotPasswordEmail = async (email: string) => {
  const reqBody: forgotPasswordSendEmailApiBody = {
    email: email,
  };

  try {
    const response = await axiosInstance.post('/Auth/forgot-password', reqBody);
    return response?.data;
  } catch (error) {
    throw error;
  }
};
