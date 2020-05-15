import { ADD_GOAL, REMOVE_GOAL, TOGGLE_GOAL } from '../actions/goals';
import { RECEIVE_DATA } from '../actions/shared';


const goals = (state = [], action) => {
    switch (action.type) {
        case ADD_GOAL:
            return state.concat([action.goal]);
            break;
        case REMOVE_GOAL:
            return state.filter((goal) => goal.id !== action.id);
            break;
        case TOGGLE_GOAL:
            return state.map((goal) => goal.id !== action.id ? goal :
                Object.assign({}, goal, { complete: !goal.complete }));
            break;
        case RECEIVE_DATA:
            return action.goals;
            break;
        default:
            return state;
            break;
    }
}
export default goals;