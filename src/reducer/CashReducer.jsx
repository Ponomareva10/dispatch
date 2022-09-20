const defaultState = {
    cash: 0,
    name: 'Anna'
}

export function CashReducer(state = defaultState, action) {
    switch (action.type) {
        case "addCash":
            return {...state, cash: state.cash + action.payload}
        case "getCash":
            return {...state, cash: state.cash - action.payload} 
        default:    
            return state   
    }
}