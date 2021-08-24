let initialState: profilePageType = {
    postsData: [
        {id: 1, message: 'Hi', likeCounter: 6},
        {id: 2, message: 'Bye', likeCounter: 7},
        {id: 3, message: 'How old are you?', likeCounter: 10},
    ],
    newPostText: ''
}

export type profilePageType = {
    postsData: postType[]
    newPostText: string
}
export type postType = {
    id: number
    message: string
    likeCounter: number
}

type profileAT = addPostAT | updateNewPostTextAT
type addPostAT = {
    type: 'ADD-POST'
}
type updateNewPostTextAT = {
    type: 'UPDATE-NEW-POST-TEXT',
    newText: string
}

export const profileReducer = (state = initialState,action: profileAT): profilePageType =>{
    switch (action.type) {
        case 'ADD-POST':{
            const newPost = {id: 1, message: state.newPostText, likeCounter: 0}
            const stateCopy = {...state, postsData: [...state.postsData, newPost]}
            stateCopy.newPostText = ''
            return stateCopy
        }

        case 'UPDATE-NEW-POST-TEXT': {
            const stateCopy = {...state, newPostText: action.newText}
            return stateCopy
        }
        default:
            return state
    }
}

export const addPostAC = ():addPostAT => {
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