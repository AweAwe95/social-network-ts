import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC, UserType} from "../../redux/users-reducer";
import {Users} from "./Users";
import {AppDispatchType, AppStateType} from "../../redux/redux-store";


let mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPageData.users
    }
}
let mapDispatchToProps = (dispatch: AppDispatchType) => {
    return {
        follow:(userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow:(userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers:(users: UserType[]) => {
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)