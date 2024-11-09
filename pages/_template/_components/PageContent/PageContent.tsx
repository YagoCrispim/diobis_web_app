import { useSelector } from 'react-redux'
import { AppStateDto } from '../../../../common/interfaces/store/pages/_template/interfaces'
import { JobDto } from '../../../../common/interfaces/store/_Jobs/interfaces'
import { Card, LayoutGrid } from '../../../../components'

interface Props {
  route: string
  repo: string
}

const PageContent = ({ route, repo }: Props) => {
  const { data }: AppStateDto = useSelector(
    ({ Jobs }: any) => Jobs
  )

  function generateJobLink(jobId: number) {
    const jobsInfo: JobDto | undefined = data.find(
      ({ job }: any) => job.id === jobId
    )

    return `/${route}/${repo}/${jobsInfo.job.id}`
  }

  return (
    <LayoutGrid>
      {data.map((job: JobDto, index: number) => {
        return (
          <Card data={job} link={generateJobLink(job.job.id)} key={index} />
        )
      })}
    </LayoutGrid>
  )
}

export { PageContent }
