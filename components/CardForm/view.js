import BankCard from "components/BankCard";
import { Form } from 'react-final-form';

export default function CardFormView({ onSubmit }) {
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <BankCard />
        </form>
      )}
    />
  )
}
