import { useState } from 'react';
import { FormData, ValidationRules } from '../types/form';

export const useFormValidation = (initialData: FormData, rules: ValidationRules) => {
  const [data, setData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateField = (name: string, value: string): string => {
    const rule = rules[name];
    if (!rule) return '';

    if (rule.required && !value.trim()) {
      return 'Este campo é obrigatório';
    }

    if (rule.email && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return 'Email inválido';
    }

    if (rule.phone && value && !/^\(?[1-9]{2}\)?\s?(?:[2-8]|9[1-9])[0-9]{3}-?[0-9]{4}$/.test(value.replace(/\s/g, ''))) {
      return 'Telefone inválido';
    }

    if (rule.minLength && value && value.length < rule.minLength) {
      return `Mínimo de ${rule.minLength} caracteres`;
    }

    return '';
  };

  const handleChange = (name: string, value: string) => {
    setData(prev => ({ ...prev, [name]: value }));
    
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const validateAll = (): boolean => {
    const newErrors: { [key: string]: string } = {};
    let isValid = true;

    Object.keys(rules).forEach(fieldName => {
      const error = validateField(fieldName, data[fieldName] || '');
      if (error) {
        newErrors[fieldName] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const reset = () => {
    setData(initialData);
    setErrors({});
  };

  return {
    data,
    errors,
    handleChange,
    validateAll,
    reset
  };
};