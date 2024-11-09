import DateConvert from '../common/helpers/DateConvert'
import { ResultDto } from '../common/interfaces/store/services/interfaces'
import { JobDto, JobLabelDto } from '../common/interfaces/store/_Jobs/interfaces'

export function toError(data: ResultDto) {
  return { message: data.message, status: data.status }
}

export function ObjectToJob(data: any): JobDto {
  return {
    user: {
      id: data.user.id,
      name: data.user.login,
      avatar: data.user.avatar_url,
    },
    job: {
      id: data.number,
      createdAt: DateConvert.toRelative(data.created_at),
      title: data.title,
      labels: data.labels.map((label: JobLabelDto) => ({
        id: label.id,
        name: label.name,
        color: `#${label.color}`,
      })),
      markdown: data.body,
    },
  }
}

export function ArrayToJob(data = []): JobDto[] {
  return data.map(ObjectToJob)
}
