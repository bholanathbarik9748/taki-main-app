import apiInstance from '../../../utils/Interceptor/Interceptor';
import {LoginBody} from '../types/login';

export const loginUser = async (FormData: LoginBody) => {
  try {
    const response = await apiInstance.post('/auth/signin', FormData);
    return response?.data;
  } catch (error) {
    throw error;
  }
};
