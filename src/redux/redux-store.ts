import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {messagesReducer} from "./messages-reducer";
import {usersReducer} from "./users-reducer";

let reducers = combineReducers({
    profilePageData: profileReducer,
    messagesPageData: messagesReducer,
    usersPageData: usersReducer
})

export type AppStoreType = typeof store
export type AppStateType = ReturnType<typeof reducers>
export type AppDispatchType = typeof store.dispatch

export let store = createStore(reducers)