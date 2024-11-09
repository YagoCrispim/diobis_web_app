import { JobsStateDto } from '../../../../common/interfaces/store/_Jobs/interfaces'
import { Alert } from '../../../../components'
import * as CSS from './PageError.styled'

interface Props {
  error: JobsStateDto['error']
}

const PageError = ({ error }: Props) => {
  return (
    <CSS.Error>
      <Alert type="warning">
        <p>
          <b>{error.code}</b> | {error.message}
        </p>
      </Alert>
    </CSS.Error>
  )
}

export { PageError }
