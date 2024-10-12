import {LoginBody} from '../types/login';
import {axiosInstance} from '../../../utils/Interceptor/Interceptor';

export const loginUser = async (FormData: LoginBody) => {
  const reqBody = {
    email: FormData.email,
    password: FormData.password,
  };

  try {
    const response = await axiosInstance.post('/auth/signin', reqBody);
    return response.data; // Return the data if needed for further processing
  } catch (error) {
    // Optionally rethrow the error if you need it to be handled elsewhere
    throw error;
  }
};
