import { FC, Fragment } from 'react'

import { CodedError } from '~/lib/types/global'

const ERROR_MESSAGES: Record<string, string> = {
  WALLET_ALREADY_ACTIVE: 'Wallet is already active',
  WALLET_QUEUE_CODE_NOT_FOUND: 'Invalid wallet queue code'
}

interface ErrorRendererProps {
  errors?: CodedError[] | { errors: CodedError[] }
}

export const ErrorRenderer: FC<ErrorRendererProps> = ({ errors }) => {
  const normalizedErrors: CodedError[] = Array.isArray(errors) ? errors : errors && 'errors' in errors ? errors.errors : []

  return (
    <Fragment>
      {normalizedErrors.map((error, index) =>
        error?.code ? <p key={error.code}>{ERROR_MESSAGES[error.code] ?? error.code}</p> : <p key={index}>Unknown error</p>
      )}
    </Fragment>
  )
}
