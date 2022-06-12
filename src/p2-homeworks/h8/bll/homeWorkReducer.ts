import {UserType} from "../HW8";

type SortActionType = {
    type: 'sort'
    payload: string
}
type CheckActionType = {
    type: 'check'
    payload: number
}

export const homeWorkReducer = (state: UserType[], action: SortActionType | CheckActionType): UserType[] => {
    switch (action.type) {
        case 'sort': {
            if (action.payload === 'up') {
                return [...state].sort((a, b) => a.name < b.name ? -1 : 1)
            } else if (action.payload === 'down') {
                return [...state].sort((a, b) => a.name > b.name ? -1 : 1)
            } else return state
        }
        case 'check': {
            return state.filter(el => el.age > action.payload)
        }
        default:
            return state
    }
}