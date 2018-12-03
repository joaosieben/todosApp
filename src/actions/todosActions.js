import { 
  ADD_TODO, 
  UPDATE_TITLE,
  SET_LOADING,
  CLEAR_TITLE,
  TOGGLE_TODO
} from './types'

export const addTodo = todo => dispatch => {
  if (todo.trim().length) {
    dispatch({ type: SET_LOADING, payload: true })
    dispatch({ type: ADD_TODO, payload: todo })
    dispatch({ type: SET_LOADING, payload: false })
    dispatch({ type: CLEAR_TITLE })
  }
}

export const updateTitle = title => dispatch => {
  dispatch({ type: UPDATE_TITLE, payload: title })
}

export const toggleTodo = todo => dispatch => {
  dispatch({ type: TOGGLE_TODO, payload: todo })
}