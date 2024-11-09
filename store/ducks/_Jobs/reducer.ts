import {
  ActionDto,
  JobsStateDto,
} from '../../../common/interfaces/store/_Jobs/interfaces'
import * as TYPES from './types'

const INITIAL_STATE: JobsStateDto = {
  lastPage: 1,
  data: [],
  filteredData: [],
  otherJobs: [],
  loading: false,
  fetchingData: false,
  error: {
    active: false,
    message: '',
    code: '',
  },
}

const reducer = (state: JobsStateDto = INITIAL_STATE, action: ActionDto) => {
  switch (action.type) {
    case TYPES.DATA_PUSH:
      return { ...state, loading: true }

    case TYPES.DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: { ...INITIAL_STATE.error },
      }

    case TYPES.DATA_ERROR:
      return {
        ...state,
        loading: false,
        error: {
          active: true,
          message: action.payload.message,
          code: action.payload.status,
        },
      }

    case TYPES.UPDATE_CURRENT_PAGE_VALUE:
      return {
        ...state,
        lastPage: action.payload,
      }

    case TYPES.APPEND_DATA:
      return { ...state, data: [...state.data, ...action.payload] }

    case TYPES.GET_OTHER_JOBS:
      return {
        ...state,
        otherJobs: action.payload,
      }

    case TYPES.FETCHING_DATA:
      return {
        ...state,
        fetchingData: action.payload,
      }

    default:
      return state
  }
}

export default reducer
