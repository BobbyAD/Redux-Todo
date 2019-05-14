export const NEW_TASK = "NEW_TASK";

export const addTask = newTask => {
    return {
        type: NEW_TASK,
        payload: newTask
    }
}

export const TOGGLE_COMPLETE = "TOGGLE_COMPLETE";

export const toggleComplete = taskID => {
    return {
        type: TOGGLE_COMPLETE,
        payload: taskID
    }
}