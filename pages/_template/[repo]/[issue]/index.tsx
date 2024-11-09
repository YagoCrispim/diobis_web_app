import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'

// ========================
// Components
// ========================
import { Header } from '../../../../components'

// ========================
// Services
// ========================
import Service from '../../../../services/Jobs.service'

// ========================
// Redux actions
// ========================
import { OTHER_JOBS } from '../../../../store/ducks/_Jobs/actions'
import { JobDto } from '../../../../common/interfaces/store/_Jobs/interfaces'
import { Loading, Error, PageContent } from './_components'

interface Props {
  repo: string
}

const Issue = ({ repo }: Props) => {
  const { query } = useRouter()
  const dispatch = useDispatch()

  // ========================
  // Redux
  // ========================
  const Jobs: JobDto[] = useSelector(({ Jobs }: any) => Jobs.data)
  const OtherJobs: JobDto[] = useSelector(({ Jobs }: any) => Jobs.otherJobs)
  const [JobInfo, setJobInfo] = useState<JobDto>({} as JobDto)

  // ========================
  // Layout organization
  // ========================
  const [loading, setLoading] = useState(true)

  // Other infos
  const [error, setError] = useState({
    isActive: false,
    message: '',
    status: '',
  })

  // Effects
  useEffect(() => {
    if (!query.issue) return

    const Job = Jobs.find(({ job }) => String(job.id) === query.issue)

    if (Job) {
      setLoading(false)
      setJobInfo(Job)
    } else {
      Service.getByID(query.issue as string, repo).then(
        success => {
          setJobInfo(success as any)
          setLoading(false)
          return success
        },
        ({ message, status }) => {
          setError({ isActive: true, message, status })
          setLoading(false)
        }
      )
    }
  }, [query.issue])

  useEffect(() => {
    if (!query.issue) return

    if (!!JobInfo && !!JobInfo.user) {
      dispatch(OTHER_JOBS(JobInfo.user.name, repo))
    }
  }, [query.issue, JobInfo])

  return (
    <>
      <Header />

      {loading && !error.isActive && <Loading />}

      {!loading && error.isActive && (
        <Error
          isActive={error.isActive}
          message={error.message}
          status={error.status}
        />
      )}

      {!loading && !error.isActive && !!JobInfo && (
        <PageContent JobInfo={JobInfo} OtherJobs={OtherJobs} repo={repo} />
      )}
    </>
  )
}

export default Issue
