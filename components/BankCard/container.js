import BankCardView from "./view";
import { composeValidators, required, monthValidator, yearValidator, cvcValidator, cardValidator } from 'validators';

export function BankCardContainer() {
  return (
    <BankCardView 
      cardValidator={composeValidators(required, cardValidator)}
      monthValidator={composeValidators(required, monthValidator, yearValidator)}
      cvcValidator={composeValidators(required, cvcValidator)} 
    />
  )
}
