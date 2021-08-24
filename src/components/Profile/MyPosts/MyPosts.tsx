import React, {ChangeEvent} from "react";
import m from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {postType} from "../../../redux/profile-reducer";

type MyPostsType = {
    postsData: postType[]
    newPostText: string
    addPost: () => void
    textAreaHandler: (newPostText: string) => void
}

export function MyPosts(props: MyPostsType) {
    const postsElements = props.postsData.map(p => <Post key={p.id} message={p.message} likeCounter={p.likeCounter}/>)
    const TextAreaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.textAreaHandler(e.currentTarget.value)
    }
    const addPost = () => {
        props.addPost()
    }

    return <div>
        My posts
        <div>
            <textarea value={props.newPostText} onChange={TextAreaHandler}></textarea>
            <button onClick={addPost}>Add post</button>
            <button>Remove</button>
        </div>
        <div className={m.posts}>
            {postsElements}
        </div>
    </div>;
}