
export type StateTypes = {
    profilePageData: ProfilePageDataTypes
    messagesPageData: MessagesPageDataTypes
}

export type ProfilePageDataTypes = {
    postsData: PostsDataTypes[]
}
export type PostsDataTypes = {
    id: number
    message: string
    likeCounter: number
}

export type MessagesPageDataTypes = {
    friendsData: FriendsDataTypes[]
    messagesData: MessagesDataTypes[]
}
export type FriendsDataTypes = {
    id: number
    name: string
}
export type MessagesDataTypes = {
    id: number
    message: string
}

export const state:StateTypes = {
    profilePageData: {
        postsData: [
            {id: 1, message: 'Hi', likeCounter: 6},
            {id: 2, message: 'Bye', likeCounter: 7},
            {id: 3, message: 'How old are you?', likeCounter: 10},
        ]
    },
    messagesPageData: {
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
        ]
    }
}