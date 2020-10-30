import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../actions/types'

export default function todosReducer(state, { type, payload }) {
    switch (type) {
        case ADD_TODO:
            return { ...state, todos: [...state.todos, payload] }

        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === payload ? { ...todo, complete: !todo.complete } : todo)
            }

        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== payload)
            }

        default:
            return state
    }
}