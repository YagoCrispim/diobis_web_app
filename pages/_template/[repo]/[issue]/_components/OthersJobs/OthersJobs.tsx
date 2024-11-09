import React from 'react'
import * as CSS from './OthersJobs.styled'
import { Label } from '../../../../../../components'
import { useSelector } from 'react-redux'
import { JobDto } from '../../../../../../common/interfaces/store/_Jobs/interfaces'
import { appConfig } from '../../../../../../configs/appConfig/repos'

interface Props {
  route: string
  repo: string
}

const OthersJobs = ({ route, repo }: Props) => {
  const OtherJobs: JobDto[] = useSelector(({ Jobs }: any) => Jobs.otherJobs)

  return (
    <CSS.Container>
      <CSS.Slider>
        {OtherJobs.slice(1).map(({ job }) => {
          return (
            <CSS.Card key={job.id}>
              <p>{job.title}</p>
              <div tw="mb-4" className="labels">
                {job.labels.slice(0, appConfig.tagsLimitPerCard).map(label => (
                  <Label
                    key={label.name}
                    value={label.name}
                    color={label.color}
                  />
                ))}
              </div>

              <CSS.Button>
                <a href={`/${route}/${repo}/${job.id}`}>Abrir a vaga</a>
              </CSS.Button>
            </CSS.Card>
          )
        })}
        {/* GAMB */}
        <h1 style={{ color: '#ffffff00' }}> Easter Egg! </h1> 
      </CSS.Slider>
    </CSS.Container>
  )
}

export { OthersJobs }
