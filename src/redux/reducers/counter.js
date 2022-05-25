const initialState = {
    number: 0,
    name: 'SAMUEL',
    status: 'benar'
}

export default function(state =  initialState, action) {
    switch (action.type) {  
        case 'UPDATE_NAME':
            return {
                ...state,
                name: action.payload
            }
        case 'UPDATE_COUNTER':
            return {
                ...state,
                number: action.payload
            }
        default:
            return state
    }
}