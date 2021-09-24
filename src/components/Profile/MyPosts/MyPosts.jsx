import React from "react";
import m from "./MyPosts.module.css"
import {Post} from "./Post/Post";

export function MyPosts(props) {
    const postsElements = props.postsData.map(p => <Post key={p.id} message={p.message} likeCounter={p.likeCounter}/>)
    const TextAreaHandler = (e) => {
        props.textAreaHandler(e)
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