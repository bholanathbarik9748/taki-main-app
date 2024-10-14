export interface forgotPasswordForm {
  email: string;
  otp: string;
  newPassword: string;
}

export interface forgotPasswordError {
  email: boolean;
  otp?: boolean;
  newPassword?: boolean;
}

// api type
export interface forgotPasswordApiBody {
  email: string;
  password: string;
  otp: string;
}

export interface forgotPasswordSendEmailApiBody {
  email: string;
}
