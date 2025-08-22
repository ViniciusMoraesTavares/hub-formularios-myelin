export interface FormField {
  name: string;
  value: string;
  error?: string;
  required?: boolean;
}

export interface FormData {
  [key: string]: string;
}

export interface ValidationRules {
  [key: string]: {
    required?: boolean;
    email?: boolean;
    minLength?: number;
    phone?: boolean;
  };
}