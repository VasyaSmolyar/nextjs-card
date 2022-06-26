import { Card, CardContent, Stack, TextField, Input} from '@mui/material';
import { formatCreditCardNumber, formatCVC, formatExpirationDate } from 'formatters';
import { Field } from 'react-final-form';
import styles from './BankCard.module.css'

export default function BankCardView({ cardValidator, monthValidator, cvcValidator }) {
  return (
    <Card>
      <CardContent>
        <Stack spacing={2}>
          <Field 
            name="cardNumber" 
            validate={cardValidator} 
            format={formatCreditCardNumber} 
          >
            {({ input, meta }) => (
              <Stack
                direction="row"
                spacing={1}
              >
                <TextField sx={{ boxShadow: 3 }} size="small" {...input} variant="outlined" type="text" placeholder="Card Number" pattern="[\d| ]{16}" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </Stack>
            )}
          </Field>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
            className={styles.stack}
          >
            <Field name="expirationDate" 
              validate={monthValidator}
              format={formatExpirationDate}
            >
              {({ input, meta }) => (
                <Stack
                  spacing={1}
                >
                  <TextField sx={{ boxShadow: 3 }} size="small" {...input} className={styles.expire} type="text" pattern="\d\d/\d\d" placeholder="00/0000" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </Stack>
              )}
            </Field>
            <Field 
              name="CVC" 
              validate={cvcValidator}
              format={formatCVC}
            >
              {({ input, meta }) => (
                <Stack
                  spacing={1}
                >
                  <TextField sx={{ boxShadow: 3 }} size="small" {...input} className={styles.cvv} type="text" pattern="\d{3}" placeholder="000" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </Stack>
              )}
            </Field>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  )
}
