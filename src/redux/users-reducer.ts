let initialState: UsersPageType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as number[]
}

export type UsersPageType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: number[]
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

type UsersAT =
    followAT
    | unfollowAT
    | setUsersAT
    | setCurrentPageAT
    | setTotalUsersCountAT
    | setIsFetchingAT
    | toggleIsFollowingProgressAT

type followAT = {
    type: 'FOLLOW',
    userId: number
}
type unfollowAT = {
    type: 'UNFOLLOW',
    userId: number
}
type setUsersAT = {
    type: 'SET-USERS',
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
type setIsFetchingAT = {
    type: 'TOGGLE-IS-FETCHING'
    isFetching: boolean
}
type toggleIsFollowingProgressAT = {
    type: 'TOGGLE-IS-FOLLOWING-PROGRESS'
    isFetching: boolean
    userId: number
}


export const usersReducer = (state: UsersPageType = initialState, action: UsersAT): UsersPageType => {
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
        case 'TOGGLE-IS-FETCHING': {
            return {...state, isFetching: action.isFetching}
        }
        case 'TOGGLE-IS-FOLLOWING-PROGRESS': {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
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
export const setIsFetchingAC = (isFetching: boolean): setIsFetchingAT => {
    return {
        type: 'TOGGLE-IS-FETCHING',
        isFetching
    }
}
export const toggleIsFollowingProgressAC = (isFetching: boolean, userId: number): toggleIsFollowingProgressAT => {
    return {
        type: 'TOGGLE-IS-FOLLOWING-PROGRESS',
        isFetching,
        userId
    }
}