import {
  STARTUP_DETAILS_REQUEST,
  STARTUP_DETAILS_SUCCESS,
  STARTUP_DETAILS_FAIL,
  STARTUP_DELETE_REQUEST,
  STARTUP_DELETE_SUCCESS,
  STARTUP_DELETE_FAIL,
  STARTUP_CREATE_REQUEST,
  STARTUP_CREATE_SUCCESS,
  STARTUP_CREATE_FAIL,
  STARTUP_CREATE_RESET,
  STARTUP_UPDATE_REQUEST,
  STARTUP_UPDATE_SUCCESS,
  STARTUP_UPDATE_FAIL,
  STARTUP_UPDATE_RESET,
} from '../constants/startupConstants'

export const startupDetailsReducer = (state = { startup: {} }, action) => {
  switch (action.type) {
    case STARTUP_DETAILS_REQUEST:
      return { loading: true, ...state }
    case STARTUP_DETAILS_SUCCESS:
      return { loading: false, startup: action.payload }
    case STARTUP_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const startupDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case STARTUP_DELETE_REQUEST:
      return { loading: true }
    case STARTUP_DELETE_SUCCESS:
      return { loading: false, success: true }
    case STARTUP_DELETE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const startupCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case STARTUP_CREATE_REQUEST:
      return { loading: true }
    case STARTUP_CREATE_SUCCESS:
      return { loading: false, success: true, startup: action.payload }
    case STARTUP_CREATE_FAIL:
      return { loading: false, error: action.payload }
    case STARTUP_CREATE_RESET:
      return {}
    default:
      return state
  }
}

export const startupUpdateReducer = (state = { startup: {} }, action) => {
  switch (action.type) {
    case STARTUP_UPDATE_REQUEST:
      return { loading: true }
    case STARTUP_UPDATE_SUCCESS:
      return { loading: false, success: true, startup: action.payload }
    case STARTUP_UPDATE_FAIL:
      return { loading: false, error: action.payload }
    case STARTUP_UPDATE_RESET:
      return { startup: {} }
    default:
      return state
  }
}
