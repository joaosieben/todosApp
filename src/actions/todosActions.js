import { 
  ADD_TODO, 
  UPDATE_TITLE,
  SET_LOADING,
  CLEAR_TITLE
} from './types'

export const addTodo = (todo) => dispatch => {
  dispatch({ type: SET_LOADING, payload: true })
  dispatch({ type: ADD_TODO, payload: todo })
  dispatch({ type: SET_LOADING, payload: false })
  dispatch({ type: CLEAR_TITLE })
}

export const updateTitle = (title) => dispatch => {
  dispatch({ type: UPDATE_TITLE, payload: title })
}