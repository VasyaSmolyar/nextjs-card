import BankCard from "components/BankCard";
import { Stack, Button, TextField, Card, CardContent } from '@mui/material';
import { Form, Field } from 'react-final-form';
import { formatAmount } from 'formatters';
import { required } from 'validators';
import styles from './CardForm.module.css'

export default function CardFormView({ card, onSubmit, status, onClick }) {
  return (
    <div className={status} onClick={onClick}>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, invalid }) => (
          <form onSubmit={handleSubmit} onClick={onClick} style={{ width: 'fit-content' }}>
            <Stack
              spacing={4}
            >
              <BankCard />

              <Card>
                <CardContent>
                  <Stack
                    direction="row"
                    spacing={2}
                    className={styles.stack}
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
                          <TextField sx={{ boxShadow: 3 }} size="small" {...input} type="text" placeholder="Amount" />
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
                </CardContent>
              </Card>

              {JSON.stringify(card, 0, 2) != "{}" && 
                <Card>
                  <CardContent>
                    {JSON.stringify(card, 0, 2)}
                  </CardContent>
                </Card>
              }
            </Stack>
          </form>
        )}
      />
    </div>
  )
}
