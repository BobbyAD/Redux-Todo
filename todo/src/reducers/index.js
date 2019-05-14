import { NEW_TASK, TOGGLE_COMPLETE, REMOVE_TASKS } from '../actions';

const initialState = {
    todos: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case NEW_TASK:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        value: action.payload,
                        completed: false,
                        id: Date.now()
                    }
                ]
            }
        case TOGGLE_COMPLETE:
            return {
                ...state,
                todos: state.todos.map(task => {
                    if (task.id === action.payload) {
                        return {
                            ...task,
                            completed: !task.completed
                        }
                    }
                    return task;
                })
            }
        case REMOVE_TASKS:
            return {
                ...state,
                todos: state.todos.filter(task => {
                    if (task.completed === false) {
                        return true;
                    }
                    return false;
                })
            }
        default: 
            return state;
    }
};