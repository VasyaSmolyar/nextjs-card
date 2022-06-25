import CardFormView from "./view";

export function CardFormContainer() {
  const onSubmit = async values => {
    await sleep(300);
    window.alert(JSON.stringify(values, 0, 2));
  }

  return (
    <CardFormView onSubmit={onSubmit} />
  )
}
