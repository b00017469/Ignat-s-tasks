const initState = {
    theme: ''
};

export const themeReducer = (state = initState, action: ChangeThemeCType): typeof initState=> { // fix any
    switch (action.type) {
        case "CHANGE_THEME": {
            return {...state, theme: action.theme};
        }
        default: return state;
    }
};

export const changeThemeC = (theme: string): ChangeThemeCType =>
    ({type: "CHANGE_THEME", theme}); // fix any

type ChangeThemeCType = {
    type: "CHANGE_THEME"
    theme: string
}