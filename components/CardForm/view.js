import BankCard from "components/BankCard";
import { Stack, Button, Input } from '@mui/material';
import { Form, Field } from 'react-final-form';
import { formatAmount } from 'formatters';
import { required } from 'validators';

export default function CardFormView({ onSubmit }) {
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, invalid }) => (
        <form onSubmit={handleSubmit}>
          <BankCard />
          <Stack
            direction="row"
            spacing={2}
          >
            <Field 
              name="Amount" 
              validate={required} 
              format={formatAmount} 
            >
              {({ input, meta }) => (
                <Stack
                  spacing={1}
                >
                  <Input {...input} type="text" placeholder="Amount" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </Stack>
              )}
            </Field>
            <Button 
              variant="contained" 
              disabled={invalid}
              type="submit"
            >
              Continue
            </Button>
          </Stack>
        </form>
      )}
    />
  )
}
