import Head from 'next/head'
import * as CSS from './Error.styled'
import { Alert } from '../../../../../../components'

interface Props {
  isActive: boolean
  message: string
  status: string
}

const Error = ({ isActive, message, status }: Props) => {
  return (
    <section>
      <CSS.Container>
        <Head>
          <title>
            {status} | {message}
          </title>
        </Head>
        <Alert type="warning">
          {status} | {message}
        </Alert>
      </CSS.Container>
    </section>
  )
}

export { Error }
