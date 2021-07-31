import React from "react";
import m from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {PostsDataTypes} from "../../../redux/state";

type MyPostsPropsTypes = {
    postsData: PostsDataTypes[]
}

export function MyPosts(props: MyPostsPropsTypes) {

    return <div>
        My posts
        <div>
            <textarea></textarea>
            <button>Add post</button>
            <button>Remove</button>
        </div>
        <div className={m.posts}>
            {props.postsData.map(p => <Post message={p.message} likeCounter={p.likeCounter}/>)}
        </div>
    </div>;
}