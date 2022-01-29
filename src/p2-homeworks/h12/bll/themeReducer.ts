const initState = {};

export const themeReducer = (state = initState, action: changeThemeACType): any => { // fix any
    switch (action.type) {
        case "": {
            return state;
        }
        default:
            return state;
    }
};


type changeThemeACType = ReturnType<typeof changeThemeAC>

export const changeThemeAC = (theme: string): any => {
    return {
        type: "CHANGE-THEME",
        theme
    }
}; // fix any