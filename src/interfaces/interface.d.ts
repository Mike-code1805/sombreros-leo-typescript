export interface HatProps {
  _id?: string;
  address: string;
  advancement: string;
  cintillo: string;
  color_hat: string;
  color_tape: string;
  date: string;
  measure: string;
  name: string;
  observations: string;
  price: string;
  size: string;
  state: string;
  state_payment: string;
  tafalete: string;
  pendiente: boolean;
}

export interface LoginUser {
  data: Tok;
  status: number;
}

interface Tok {
  token: Token;
}

export interface Token {
  authToken: string;
  refreshToken?: string;
  username: string;
}

export interface User {
  username: string;
  password: string;
  passwordConfirmation?: string;
}

export interface RegisterUserProps {
  username: string;
  isAdmin: boolean;
  email: null;
  password: string;
  valid: boolean;
  _id: string;
  created_at: string;
  updated_at: string;
  __v: number;
  id: string;
}
