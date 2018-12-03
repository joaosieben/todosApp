import { 
  ADD_TODO,
  UPDATE_TITLE, 
  SET_LOADING,
  CLEAR_TITLE,
  TOGGLE_TODO
} from '../actions/types'
import { append, update } from 'ramda'

const INITIAL_STATE = {
  todosList: [],
  title: '',
  loading: false
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ADD_TODO:
    const newTodo = {
      title: action.payload,
      done: false
    }
      return { ...state, todosList: append(newTodo, state.todosList) }
    case UPDATE_TITLE:
      return { ...state, title: action.payload }
    case SET_LOADING:
      return { ...state, loading: action.payload }
    case CLEAR_TITLE:
      return { ...state, title: '' }
    case TOGGLE_TODO:
      const updatedTodo = {
        ...state.todosList[action.payload],
        done: !state.todosList[action.payload].done
      }
      const newList = update(action.payload, updatedTodo, state.todosList)
      return { ...state, todosList: newList }
    default:
      return state
  }
}