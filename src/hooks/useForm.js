import { useState } from 'react';

export const useForm = (initialForm = {}, validations = {}) => {
  const [formState, setFormState] = useState(initialForm);
  const [formErrors, setFormErrors] = useState({}); // Estado para los errores

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    
    // Actualizar el estado del formulario
    setFormState({
      ...formState,
      [name]: value,
    });

    // Validar el campo
    if (validations[name]) {
      const isValid = validations[name].test(value); // Validación con regex
      setFormErrors({
        ...formErrors,
        [name]: !isValid ? 'Invalid value' : null, // Mensaje de error si no pasa la validación
      });
    }
  };

  const onResetForm = () => {
    setFormState(initialForm);
    setFormErrors({});
  };

  const isFormValid = () => {
    // Validar todos los campos del formulario
    const errors = {};
    for (const field in validations) {
      if (validations[field]) {
        const isValid = validations[field].test(formState[field] || '');
        if (!isValid) {
          errors[field] = 'Invalid value';
        }
      }
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0; // Retorna true si no hay errores
  };

  return {
    ...formState,
    formState,
    formErrors,
    onInputChange,
    onResetForm,
    isFormValid,
  };
};
