export interface JobDto {
  user: {
    id: number
    name: string
    avatar: string
  }
  job: {
    id: number
    createdAt: string
    title: string
    labels: JobLabelDto[]
    markdown: string
  }
}

export interface JobLabelDto {
  id: number
  name: string
  color: string
}
export interface JobsStateDto {
  lastPage: number
  data: JobDto[]
  filteredData: JobDto[]
  otherJobs: JobDto[]
  loading: boolean
  fetchingData: boolean
  error: {
    active: boolean
    message: string
    code: string
  }
}

export interface ActionDto {
  type: string
  payload: any
}

/* ===== DATA_SUCCESS ===== */
export interface ErrorDto {
  active: boolean
  message: string
  code: number
}
