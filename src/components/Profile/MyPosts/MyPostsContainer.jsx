import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        postsData: state.profilePageData.postsData,
        newPostText: state.profilePageData.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost:() => {
            dispatch(addPostAC())
        },
        textAreaHandler: (e) => {
            dispatch(updateNewPostTextAC(e))
        }
    }
}
export const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)