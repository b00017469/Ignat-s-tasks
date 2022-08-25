
type LoadingActionType = {
    type: 'CHANGE_STATUS'
    status: boolean
}

const initState = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: LoadingActionType): typeof initState => {
    switch (action.type) {
        case 'CHANGE_STATUS': {
            return {...state, isLoading: action.status}
        }
        default: return state
    }
}

export const loadingAC = (status: boolean): LoadingActionType => {
     return {type: 'CHANGE_STATUS', status}
     } // fix any