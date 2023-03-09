import provider from "@/services/provider";

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone?: string;
  customerId: string;
};

export type CheckEmail = {
  email: string;
};
export type LoginBody = {
  email: string;
  password: string;
};
export type RegisterBody = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone?: string;
};
export type TokenResponse =
  | {
      token: string;
    }
  | Error;
export type Error = {
  message: string;
  status: number;
  field?: string;
};
export type CheckEmailResponse = {
  message: string;
  status: number;
};
export type ForgotPasswordBody = {
  email: string;
};
export type ForgotPasswordResponse = {
  message: string;
  status: number;
};
export type ResetPasswordBody = {
  password: string;
  token: string;
};
export type ResetPasswordResponse = {
  message: string;
  status: number;
};
export type ChangePasswordBody = {
  oldPassword: string;
  newPassword: string;
};
export type ChangePasswordResponse = {
  message: string;
  status: number;
};
export type UpdateProfileBody = {
  firstName: string;
  lastName: string;
  phone: string;
};
export type UpdateProfileResponse = {
  message: string;
  status: number;
};

export const authService = {
  login: (data: LoginBody) => provider.post<TokenResponse>("auth/login", data),
  register: (data: RegisterBody) =>
    provider.post<TokenResponse>("auth/register", data),
  checkEmail: (data: CheckEmail) =>
    provider.post<CheckEmailResponse>("auth/check-email", data),
  forgotPassword: (data: ForgotPasswordBody) =>
    provider.post<ForgotPasswordResponse>("auth/forgot-password", data),
  getUser: () => provider.get<User>("auth/me"),
};
