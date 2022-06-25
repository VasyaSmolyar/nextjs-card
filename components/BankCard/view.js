import { Card, CardContent, Stack, Typography, Input } from '@mui/material';
import { required } from 'validators';
import { Field } from 'react-final-form';
import styles from './BankCard.module.css'

export default function BankCardView() {
  return (
    <Card sx={{ maxWidth: 475 }}>
      <CardContent>
        <Stack spacing={2}>
          <Field name="Card Number" validate={required}>
            {({ input, meta }) => (
              <Stack
                direction="row"
                spacing={1}
              >
                <Input {...input} type="text" placeholder="Card Number" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </Stack>
            )}
          </Field>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <Stack
              direction="row"
              spacing={1}
            >
              <Field name="Expiration Month" validate={required}>
                {({ input, meta }) => (
                  <Stack
                    spacing={1}
                  >
                    <Input {...input} className={styles.expire} type="text" placeholder="00" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </Stack>
                )}
              </Field>
              <Typography>/</Typography>
              <Field name="Expiration Year" validate={required}>
                {({ input, meta }) => (
                  <Stack
                    spacing={1}
                  >
                    <Input {...input} className={styles.expire} type="text" placeholder="00" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </Stack>
                )}
              </Field>
            </Stack>
            <Field name="CVV" validate={required}>
              {({ input, meta }) => (
                <Stack
                  spacing={1}
                >
                  <Input {...input} className={styles.cvv} type="text" placeholder="CVV" />
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
