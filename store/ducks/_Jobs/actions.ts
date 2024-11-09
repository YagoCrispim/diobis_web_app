import * as TYPES from './types'
import Service from '../../../services/Jobs.service'
import {
  ErrorDto,
  JobDto,
} from '../../../common/interfaces/store/_Jobs/interfaces'

export const PUSH = () => ({
  type: TYPES.DATA_PUSH,
})

export const ERROR = (data: ErrorDto) => ({
  type: TYPES.DATA_ERROR,
  payload: data,
})

export const SUCCESS = (data: JobDto[]) => ({
  type: TYPES.DATA_SUCCESS,
  payload: data,
})

export const APPEND_DATA = (jobs: JobDto[]) => ({
  type: TYPES.APPEND_DATA,
  payload: jobs,
})

export const GET_ANOTHER_JOBS = (jobs: JobDto[]) => ({
  type: TYPES.GET_OTHER_JOBS,
  payload: jobs,
})

export const UPDATE_CURRENT_PAGE_VALUE = (currentPage: number) => ({
  type: TYPES.UPDATE_CURRENT_PAGE_VALUE,
  payload: currentPage,
})

export const SET_FETCHING_DATA = (fetching: boolean) => ({
  type: TYPES.FETCHING_DATA,
  payload: fetching,
})

export const GET_ANOTHER_PAGE =
  (page: number, repo: string) => async (dispatch: Function) => {
    dispatch(FETCHING_DATA(true))
    Service.getAll(page, repo)
      .then((jobs: JobDto[]) => {
        dispatch(FETCHING_DATA(false))
        dispatch(APPEND_DATA(jobs))
      })
      .catch(error => {
        dispatch(FETCHING_DATA(false))
        console.log(error)
      })
  }

export const FETCHING_DATA =
  (fetching: boolean) => async (dispatch: Function) => {
    const timeout = fetching ? 0 : 2500

    setTimeout(() => {
      return dispatch(SET_FETCHING_DATA(fetching))
    }, timeout)
  }

export const OTHER_JOBS =
  (userName: string, repo: string) => async (dispatch: Function) => {
    dispatch(FETCHING_DATA(true))
    Service.getByUser(userName, repo)
      .then((jobs: JobDto[]) => {
        dispatch(FETCHING_DATA(false))
        dispatch(GET_ANOTHER_JOBS(jobs))
      })
      .catch(error => {
        dispatch(FETCHING_DATA(false))
        dispatch(ERROR(error))
      })
  }

export const FETCHING = (repo: string) => async (dispatch: any) => {
  dispatch(PUSH())
  Service.getAll(undefined, repo).then(
    success => dispatch(SUCCESS(success)),
    error => dispatch(ERROR(error))
  )
}
