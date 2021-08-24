import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppDispatchType, AppStateType} from "../../../redux/redux-store";

let mapStateToProps = (state: AppStateType) => {
    return {
        postsData: state.profilePageData.postsData,
        newPostText: state.profilePageData.newPostText
    }
}
let mapDispatchToProps = (dispatch: AppDispatchType) => {
    return {
        addPost:() => {
            dispatch(addPostAC())
        },
        textAreaHandler: (newPostText: string) => {
            dispatch(updateNewPostTextAC(newPostText))
        }
    }
}
export const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)