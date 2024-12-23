export interface LoginViewModel {
  email: string;
  password: string;
  isLoading: boolean;
  setPassword(password: string): React.Dispatch<React.SetStateAction<string>>;
  setEmail(email: string): React.Dispatch<React.SetStateAction<string>>;
  onSubmit: () => void;
}
