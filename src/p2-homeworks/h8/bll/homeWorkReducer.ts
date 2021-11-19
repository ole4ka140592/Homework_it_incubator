import {UserType} from "../HW8";

type ActionType = { type: 'sortUp' } | { type: 'sortDown' } | { type: 'check', payload: 18 }

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sortUp': {
            let newState=[...state]
            return newState.sort((a: UserType, b: UserType)=> a.name>b.name ? 1 : -1)
        }

        case 'sortDown': {
            let newState=[...state]
            return newState.sort((a: UserType, b:UserType)=> a.name>b.name ? -1 : 1)
        }

        case 'check': {
            return state.filter(f => f.age >= action.payload)
        }

        default:
            return state
    }
}

