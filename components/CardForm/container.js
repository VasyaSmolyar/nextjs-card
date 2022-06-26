import { useState } from "react";
import CardFormView from "./view";
import useCardApi from "hooks/services/useCardApi";

export function CardFormContainer() {
  const { card, postCard } = useCardApi();
  const [ className, setClassName ] = useState("container paused");

  const onSubmit = values => postCard(values);

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
