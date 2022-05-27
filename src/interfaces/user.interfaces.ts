export interface IUserCreate {
  name: string;
  email: string;
  password: string;
  age: number;
  isAdm?: boolean;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserUpdate {
  userEmail: string;
  name?: string;
  email?: string;
  password?: string;
  age?: number;
}
