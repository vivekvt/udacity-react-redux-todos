import API from 'goals-todos-api';

export const ADD_GOAL = 'ADD_GOAL';
export const REMOVE_GOAL = 'REMOVE_GOAL';
export const TOGGLE_GOAL = 'TOGGLE_GOAL';

const addGoal = (goal) => {
    return {
        type: ADD_GOAL,
        goal: goal,
    }
}
const removeGoal = (id) => {
    return {
        type: REMOVE_GOAL,
        id,
    }
}

const toggleGoal = (id) => {
    return {
        type: TOGGLE_GOAL,
        id,
    }
}

export const handleAddGoal = (name, cb) => {
    return (dispatch) => {
        return API.saveGoal(name).then((goal) => {
            dispatch(addGoal(goal));
            cb();
        }).catch(() => {
            alert('An error accoured');
        });
    }
}

export const handleRemoveGoal = (goal) => {
    return (dispatch) => {
        dispatch(removeGoal(goal.id));
        return API.deleteGoal(goal.id).catch(() => {
            dispatch(addGoal(goal));
            alert('An error accoured');
        })
    }
}

export const handleToggleGoal = (id) => {
    return (dispatch) => {
        dispatch(toggleGoal(id));
        return API.saveTodoToggle(id).catch(() => {
            dispatch(toggleGoal(id));
            alert('An error accoured');
        })

    }
}