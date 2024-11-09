// REVIEW
export interface JobsStateDto {
  lastPage: number
  data: any[]
  filteredData: any[]
  otherJobs: any[]
  loading: boolean
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
