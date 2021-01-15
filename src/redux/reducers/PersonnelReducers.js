const INITIAL_STATE = {
    dataPersonnel: []
}

const personnelReducer = (state = INITIAL_STATE, action)=> {
    switch (action.type) {
        case 'GETDATA':
            return {...state, dataPersonnel: action.payload}
        default:
            return state
    }
}

export default personnelReducer