const initialState = {
    data: []
}

export default function(state =  initialState, action) {
    switch (action.type) {  
        case 'UPDATE_DATA':
            return {
                ...state, 
                data: action.payload
            }
        default:
            return state
    }
}
