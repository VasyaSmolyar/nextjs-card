import CardFormView from "./view";
import useCardApi from "hooks/services/useCardApi";

export function CardFormContainer() {
  const { card, postCard } = useCardApi();

  const onSubmit = values => postCard(values);

  return (
    <CardFormView card={card} onSubmit={onSubmit} />
  )
}
