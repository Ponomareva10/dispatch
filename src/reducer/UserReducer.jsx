const defaultState = {
    users: [
        {
            name: 'han',
            id: 1
        }   
    ]
}

const addUser = 'addUser'
const removeUser = 'removeUser'


export function UserReducer(state = defaultState, action) {
    switch (action.type) {
        case addUser:
            return {...state, users: [...state.users, action.payload]}
        case removeUser:
            return {...state, users: state.users.filter(users => users.id !== action.payload) } 
        default:    
            return state   
    }
}

export const removeUserFun = (id) => {
    return {type: removeUser, payload: id }
}

export const addUserFun = (users) => {
    return {type: "addUser", payload: users}
}