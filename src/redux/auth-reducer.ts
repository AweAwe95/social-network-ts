let initialState: AuthType = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}

type AuthType = {
    id: null | number
    login: null | string
    email: null | string
    isAuth: boolean
}

type AuthAT = setAuthUserDataAT
type setAuthUserDataAT = {
    type: 'SET-USER-DATA',
    data: authDataType
}
type authDataType = {
    userId: null | number,
    email: null | string,
    login: null | string
}

export const authReducer = (state: AuthType = initialState, action: AuthAT): AuthType => {
    switch (action.type) {
        case 'SET-USER-DATA': {
            return {...state, ...action.data, isAuth: true}
        }
        default:
            return state
    }
}

export const setAuthUserData = (userId: number, email: string, login: string) => {
    return (
        {
            type: 'SET-USER-DATA',
            data: {userId, email, login}
        }
    )
}