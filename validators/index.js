export const required = value => (value ? undefined : 'Required');

export const cardValidator = value => {
  return value.replace(/\D+/g, '').slice(0, 16).length != 16 ? 'Wrong format.' : undefined;
}

export const monthValidator = value => {
  const [ month, _ ] = value.split('/');
  const clearMonth = month.slice(0, 2);
  
  return isNaN(clearMonth) || clearMonth < 0 || clearMonth > 12 ? `The month must be between 0 and 12.` : undefined;
}

export const yearValidator = value => {
  const [ _, year ] = value.split('/');

  return year === undefined || year.slice(0, 4).length != 4 ? `Wrong format.` : undefined;
}

export const cvcValidator = value => value.slice(0, 3).length != 3 ? `Wrong format.` : undefined;

export const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined);
