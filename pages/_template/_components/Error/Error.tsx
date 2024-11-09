import React from 'react'
import { Alert } from '../../../../components'
import * as S from './styles'

interface Props {
  code: number
  message: string
}

const Error = (error: Props) => {
  return (
    <S.Error>
      <Alert type="warning">
        <p>
          <b>{error.code}</b> | {error.message}
        </p>
      </Alert>
    </S.Error>
  )
}

export { Error }
