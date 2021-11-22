const initialState = {
    isLoading: false
}

export type StateType = {
    isLoading: boolean
}

export const loadingReducer = (state: StateType = initialState, action: LoadingActionType): StateType => { // fix any
    switch (action.type) {
        case 'LOADING-CHANGE': {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        default:
            return state
    }
}

type LoadingActionType = {
    type: "LOADING-CHANGE"
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => {
    return {
        type: "LOADING-CHANGE",
        isLoading
    }
}
// fix any