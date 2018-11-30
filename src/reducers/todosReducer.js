import { 
  ADD_TODO,
  UPDATE_TITLE, 
  SET_LOADING,
  CLEAR_TITLE
} from '../actions/types'
import { append } from 'ramda'

const INITIAL_STATE = {
  todosList: [],
  title: '',
  loading: false
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ADD_TODO:
      return { ...state, todosList: append(action.payload, state.todosList) }
    case UPDATE_TITLE:
      return { ...state, title: action.payload }
    case SET_LOADING:
      return { ...state, loading: action.payload }
    case CLEAR_TITLE:
      return { ...state, title: '' }
    default:
      return state
  }
}