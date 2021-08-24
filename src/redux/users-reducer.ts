let initialState: UsersPageType = {
    users: []
}

type UsersPageType = {
    users: UserType[]
}
export type UserType = {
    id: number,
    name: string,
    status: string,
    photos: PhotosType,
    followed: boolean
}
type PhotosType = {
    small: string,
    large: string
}

type usersAT = followAT | unfollowAT | setUsersAT
type followAT = {
    type: 'FOLLOW'
    userId: number
}
type unfollowAT = {
    type: 'UNFOLLOW'
    userId: number
}
type setUsersAT = {
    type: 'SET-USERS'
    users: UserType[]
}

export const usersReducer = (state = initialState, action: usersAT):UsersPageType => {
    switch (action.type) {
        case 'FOLLOW': {
            const stateCopy = {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
            return stateCopy
        }
        case 'UNFOLLOW': {
            const stateCopy = {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
            return stateCopy
        }
        case 'SET-USERS': {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state
    }
}

export const followAC = (userId: number): followAT => {
    return (
        {
            type: 'FOLLOW',
            userId: userId
        }
    )
}
export const unfollowAC = (userId: number): unfollowAT => {
    return (
        {
            type: 'UNFOLLOW',
            userId: userId
        }
    )
}
export const setUsersAC = (users: UserType[]): setUsersAT => {
    return (
        {
            type: 'SET-USERS',
            users: users
        }
    )
}