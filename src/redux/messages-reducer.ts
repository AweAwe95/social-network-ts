let initialState: messagesPageType = {
    friendsData: [
        {id: 1, name: 'Vitali'},
        {id: 2, name: 'Denis'},
        {id: 3, name: 'Viktor'},
        {id: 4, name: 'Jurek'},
        {id: 5, name: 'Lika'},
        {id: 6, name: 'Vladimir'},
    ],
    messagesData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Whats up'},
        {id: 3, message: 'Lets play'},
        {id: 4, message: 'Are you dumb?'},
        {id: 5, message: 'Bye'},
    ],
    newMessageText: ''
}

type messagesPageType = {
    friendsData: friendDataType[]
    messagesData: messageDataType[]
    newMessageText: string
}
type friendDataType = {
    id: number,
    name: string
}
type messageDataType = {
    id: number,
    message: string
}

type messagesAT = addMessageAT | updateNewMessageTextAT
type addMessageAT = {
    type: 'ADD-MESSAGE'
}
type updateNewMessageTextAT = {
    type: 'UPDATE-NEW-MESSAGE-TEXT',
    newText: string
}

export const messagesReducer = (state: messagesPageType = initialState, action: messagesAT): messagesPageType => {
    switch (action.type) {
        case 'ADD-MESSAGE': {
            const newMessage = {id: 1, message: state.newMessageText}
            return {...state, messagesData: [...state.messagesData, newMessage], newMessageText: ''}
        }
        case 'UPDATE-NEW-MESSAGE-TEXT': {
            return {...state, newMessageText: action.newText}
        }
        default:
            return state
    }
}

export const addMessageAC = (): addMessageAT => {
    return (
        {
            type: 'ADD-MESSAGE'
        }
    )
}
export const updateNewMessageTextAC = (newText: string): updateNewMessageTextAT => {
    return (
        {
            type: 'UPDATE-NEW-MESSAGE-TEXT',
            newText
        }
    )
}