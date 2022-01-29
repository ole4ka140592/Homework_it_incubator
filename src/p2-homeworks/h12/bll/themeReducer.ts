const initState: string = ""

export const themeReducer = (state: string = initState, action: ChangeThemeACType):
    string => {
    // fix any

    switch (action.type) {

        case "CHANGE-THEME": {
            return action.value
        }

        default:
            return state;
    }
};

type ChangeThemeACType = ReturnType<typeof changeThemeAC>

export const changeThemeAC = (value: string) => {
    return {
        type: "CHANGE-THEME",
        value
    } as const
}; // fix any

