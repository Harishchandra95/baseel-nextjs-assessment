export interface Error {
  message: "";
}
export interface DataType {
  id: number;
  name: string;
  email: string;
  website: string;
  address?: { city: string; street: string; suite: string; zipcode: string };
  phone?: string;
  username?: string;
  profile?: string;
}
export interface UsersListResponse {
  users?: DataType[];
  errorMessage: string;
  error?: {};
}
export interface UserDetailResponse extends UsersListResponse {
  user?: DataType;
}
export type UserIdParams = {
  id: string;
};
export interface FormValues {
  email: string;
  name: string;
  message: string;
}