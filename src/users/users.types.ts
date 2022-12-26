export type User = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  phone: string;
  isAdmin: boolean;

  id: number;
  role?: string;
};
