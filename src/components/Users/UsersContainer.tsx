import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setIsFetchingAC,
    setTotalUsersCountAC,
    setUsersAC, toggleIsFollowingProgressAC,
    unfollowAC, UserType
} from "../../redux/users-reducer";
import {UsersAPIComponent} from "./UsersAPIComponent";
import {AppDispatch, AppRootStateType} from "../../redux/redux-store";


let mapStateToProps = (state: AppRootStateType) => {
    return {
        users: state.usersPageData.users,
        pageSize: state.usersPageData.pageSize,
        totalUsersCount: state.usersPageData.totalUsersCount,
        currentPage: state.usersPageData.currentPage,
        isFetching: state.usersPageData.isFetching,
        followingInProgress: state.usersPageData.followingInProgress,
    }
}
let mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalUsersCount: number) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        },
        toggleToFetching: (isFetching: boolean) => {
            dispatch(setIsFetchingAC(isFetching))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, {
        follow: followAC,
        unfollow: unfollowAC,
        setUsers: setUsersAC,
        setCurrentPage: setCurrentPageAC,
        setTotalUsersCount: setTotalUsersCountAC,
        toggleToFetching: setIsFetchingAC,
        toggleIsFollowingProgress: toggleIsFollowingProgressAC,
    }
)(UsersAPIComponent)