export interface User {
  id: number;
  name: string;
  email: string;
  photo?:string;
}

export interface UserWithToken {
  user: User;
  token: string;
}