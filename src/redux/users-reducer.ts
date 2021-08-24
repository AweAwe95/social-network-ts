let initialState: UsersPageType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
}

type UsersPageType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
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

type usersAT = followAT | unfollowAT | setUsersAT | setCurrentPageAT | setTotalUsersCountAT
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
type setCurrentPageAT = {
    type: 'SET-CURRENT-PAGE',
    currentPage: number
}
type setTotalUsersCountAT = {
    type: 'SET-TOTAL-USERS-COUNT',
    totalUsersCount: number
}

export const usersReducer = (state = initialState, action: usersAT): UsersPageType => {
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
            return {...state, users: action.users}
        }
        case 'SET-CURRENT-PAGE': {
            return {...state, currentPage: action.currentPage}
        }
        case 'SET-TOTAL-USERS-COUNT': {
            return {...state, totalUsersCount: action.totalUsersCount}
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
export const setCurrentPageAC = (currentPage: number): setCurrentPageAT => {
    return {
        type: 'SET-CURRENT-PAGE',
        currentPage
    }
}
export const setTotalUsersCountAC = (totalUsersCount: number): setTotalUsersCountAT => {
    return {
        type: 'SET-TOTAL-USERS-COUNT',
        totalUsersCount
    }
}

