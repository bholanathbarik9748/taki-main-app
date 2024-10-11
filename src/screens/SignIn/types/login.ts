export interface LoginBody {
  email: string;
  password: string;
}

export interface LoginFieldsError {
  email: boolean;
  password: boolean;
}
