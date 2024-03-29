import { useState, useCallback, ChangeEvent } from 'react';

export function useValidationForm<T, P>(initialValues: T, initialValid: P) {
  const [values, setValues] = useState(initialValues);
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [inputsValid, setInputsValid] = useState(initialValid);
  const [errors, setErrors] = useState(initialValues);

  function handleChangeValidation(
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  ) {
    setIsFormValid(e.target.form.checkValidity());
    //записываем имя инпута и сообщение об ошибке в объект, чтобы потом передать сообщение в <span>
    setErrors({ ...errors, [e.target.name]: e.target.validationMessage });
    //записываем имя инпута и проверку валидности в объект, чтобы использовать подсветку невалидного инпута
    setInputsValid({
      ...inputsValid,
      [e.target.name]: e.target.checkValidity(),
    });
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  function handleInput(
    e: ChangeEvent<HTMLInputElement>,
    regExp: RegExp,
    message: string,
  ) {
    e.target.setCustomValidity('');
    regExp.test(e.target.value)
      ? e.target.setCustomValidity('')
      : e.target.setCustomValidity(e.target.validationMessage || message);
    handleChangeValidation(e);
  }

  const resetForm = useCallback(() => {
    setValues(initialValues);
    setErrors(initialValues);
    setIsFormValid(false);
  }, [initialValues]);

  return {
    isFormValid,
    setIsFormValid,
    errors,
    setErrors,
    handleChangeValidation,
    inputsValid,
    setInputsValid,
    resetForm,
    values,
    setValues,
    handleInput,
  };
}
