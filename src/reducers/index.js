export default (state, action) => {
    switch(action.type){
        case 'GET_TASKS':
            return {
                ...state,
            }
        break;
        case 'ADD_TASK':
            return {
                ...state,
                tasks: [...state.tasks, action.task],
            }
        break;
        default:
            return state
    }
}