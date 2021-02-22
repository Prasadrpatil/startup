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
  STARTUP_UPDATE_REQUEST,
  STARTUP_UPDATE_SUCCESS,
  STARTUP_UPDATE_FAIL,
} from '../constants/startupConstants'
import axios from 'axios'

export const listStartupDetails = (id) => async (disaptch) => {
  try {
    disaptch({ type: STARTUP_DETAILS_REQUEST })

    const { data } = await axios.get(`/api/startup/${id}`)

    disaptch({
      type: STARTUP_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    disaptch({
      type: STARTUP_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    })
  }
}

export const deleteStartup = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: STARTUP_DELETE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    await axios.delete(`/api/startup/${id}`, config)

    dispatch({
      type: STARTUP_DELETE_SUCCESS,
    })
  } catch (error) {
    dispatch({
      type: STARTUP_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    })
  }
}

export const createStartup = ({
  name,
  description,
  platform,
  specification,
  type,
}) => async (dispatch, getState) => {
  try {
    dispatch({
      type: STARTUP_CREATE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.post(
      `/api/startup/`,
      { name, description, platform, specification, type },
      config
    )

    dispatch({
      type: STARTUP_CREATE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: STARTUP_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    })
  }
}

export const updateStartup = (startup) => async (dispatch, getState) => {
  try {
    dispatch({
      type: STARTUP_UPDATE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.put(
      `/api/startup/${startup._id}`,
      startup,
      config
    )

    dispatch({
      type: STARTUP_UPDATE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: STARTUP_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    })
  }
}
