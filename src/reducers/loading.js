import { RECEIVE_DATA } from '../actions/shared';

const loading = (state = true, action) => {
    switch (action.type) {
        case RECEIVE_DATA:
            return false;
            break;
        default:
            return state;
            break;
    }
}
export default loading;