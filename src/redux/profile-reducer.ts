let initialState: ProfilePageType = {
    postsData: [
        {id: 1, message: 'Hi', likeCounter: 6},
        {id: 2, message: 'Bye', likeCounter: 7},
        {id: 3, message: 'How old are you?', likeCounter: 10},
    ],
    newPostText: '',
    profile: null
}

type ProfilePageType = {
    postsData: PostDataType[],
    newPostText: string
    profile: null | any
}
type PostDataType = {
    id: number
    message: string
    likeCounter: number
}

type ProfileAT = addPostAT | updateNewPostTextAT | setUserProfileAT
type addPostAT = {
    type: 'ADD-POST'
}
type updateNewPostTextAT = {
    type: 'UPDATE-NEW-POST-TEXT',
    newText: string
}
type setUserProfileAT = {
    type: 'SET-USER-PROFILE',
    profile: any
}


export const profileReducer = (state: ProfilePageType = initialState, action: ProfileAT): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST': {
            const newPost = {id: 1, message: state.newPostText, likeCounter: 0}
            return {...state, postsData: [...state.postsData, newPost], newPostText: ''}
        }

        case 'UPDATE-NEW-POST-TEXT': {
            return {...state, newPostText: action.newText}
        }
        case 'SET-USER-PROFILE': {
            return {...state, profile: action.profile}
        }
        default:
            return state
    }
}

export const addPostAC = (): addPostAT => {
    return (
        {
            type: 'ADD-POST',
        }
    )
}
export const updateNewPostTextAC = (newText: string): updateNewPostTextAT => {
    return (
        {
            type: 'UPDATE-NEW-POST-TEXT',
            newText
        }
    )
}

export const setUserProfile = (profile: any): setUserProfileAT => {
    return (
        {
            type: 'SET-USER-PROFILE',
            profile
        }
    )
}