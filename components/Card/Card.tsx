import React from 'react'
import { JobDto } from '../../common/interfaces/store/_Jobs/interfaces'
import { appConfig } from '../../configs/appConfig/repos'
import Label from '../Label/Label'
import * as CSS from './Card.styled'

interface Props {
  data: JobDto
  link: string
  loading?: boolean
}

const Card = ({ data, link, loading }: Props) => {
  return (
    <>
      {loading && <CSS.Card loading={String(loading)} />}

      {!loading && (
        <CSS.Card>
          {/* card header */}
          <CSS.Header>
            <img src={data.user.avatar} alt={data.user.name} />
            <span>
              <p>{data.user.name}</p>
              <p>{data.job.createdAt}</p>
            </span>
          </CSS.Header>

          {/* card body */}
          <CSS.Body>
            <h4>{data.job.title}</h4>
            <CSS.Labels>
              {data.job.labels?.slice(0, appConfig.tagsLimitPerCard).map((label: any) => (
                <Label key={label.id} color={label.color} value={label.name} />
              ))}
            </CSS.Labels>
          </CSS.Body>

          {/* card footer */}
          <CSS.Footer>
            <a href={link}>Mais detalhes</a>
          </CSS.Footer>
        </CSS.Card>
      )}
    </>
  )
}

export default Card
