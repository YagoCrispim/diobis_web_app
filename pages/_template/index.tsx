import Head from 'next/head'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// ========================
// Redux actions
// ========================
import {
  FETCHING,
  GET_ANOTHER_PAGE,
  UPDATE_CURRENT_PAGE_VALUE,
} from '../../store/ducks/_Jobs/actions'

// ========================
// Hooks
// ========================
import useFuncAtEndOfScroll from '../../hooks/useFuncAtEndOfScroll'

// ========================
// Components
// ========================
import { Container, Header, GridSkeleton } from '../../components'

// ========================
// Styles
// ========================
import * as CSS from './styled'
import { AppStateDto } from '../../common/interfaces/store/pages/_template/interfaces'
import { PageContent, PageError } from './_components'

interface Props {
  route: string
  repo: string
}

const Template = ({ route, repo }: Props) => {
  // ========================
  // Redux
  // ========================
  const dispatch = useDispatch()
  const { data, loading, error, lastPage, fetchingData }: AppStateDto =
    useSelector(({ Jobs }: any) => Jobs)

  // ========================
  // Effects
  // ========================
  useEffect(() => {
    if (data.length === 0) dispatch(FETCHING(repo))
  }, [])

  // ========================
  // Page logic
  // ========================
  useFuncAtEndOfScroll(() => {
    if (fetchingData) {
      return
    }

    const nextPage = lastPage + 1

    dispatch(GET_ANOTHER_PAGE(nextPage, repo))
    dispatch(UPDATE_CURRENT_PAGE_VALUE(nextPage))
  })

  return (
    <>
      <Head>
        <title>Diobis | {repo}</title>
      </Head>
      <Header />
      <CSS.Section>
        <Container>
          {loading && <GridSkeleton />}

          {!loading && error.active && <PageError error={error} />}

          {!loading && !!data && <PageContent route={route} repo={repo} />}
        </Container>
      </CSS.Section>
    </>
  )
}

export default Template
