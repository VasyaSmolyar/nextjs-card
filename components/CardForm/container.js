import { useState } from "react";
import { formatCreditCardNumber, formatCVC, formatExpirationDate, formatAmount } from 'formatters';
import CardFormView from "./view";
import useCardApi from "hooks/services/useCardApi";

export function CardFormContainer() {
  const { card, postCard } = useCardApi();
  const [ className, setClassName ] = useState("container paused");

  const onSubmit = values => {
    postCard({
      Amount: formatAmount(values.Amount),
      cardNumber: formatCreditCardNumber(values.cardNumber),
      expirationDate: formatExpirationDate(values.expirationDate),
      CVC: formatCVC(values.CVC)
    })
  };

  const onClick = () => setClassName((val) => {
    if(val === "container") {
      return "container paused";
    }
    return "container";
  });

  return (
    <CardFormView 
      card={card} 
      onSubmit={onSubmit} 
      status={className}
      onClick={onClick} 
    />
  )
}
