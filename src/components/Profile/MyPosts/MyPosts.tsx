import React, {useState} from "react";
import m from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {PostsDataTypes} from "../../../redux/state";

type MyPostsPropsTypes = {
    postsData: PostsDataTypes[]
    addPost:(newPostMessage: string) => void
}

export function MyPosts(props: MyPostsPropsTypes) {
    const postsElements = props.postsData.map(p => <Post message={p.message} likeCounter={p.likeCounter}/>)
    const [newPostMessage, setNewPostMessage] = useState('')
    const TextAreaHandler = (e: React.ChangeEvent<HTMLTextAreaElement>)=>{setNewPostMessage(e.currentTarget.value)}
    const addPost = () => {
        props.addPost(newPostMessage)
        setNewPostMessage('')
    }

    return <div>
        My posts
        <div>
            <textarea value={newPostMessage} onChange={TextAreaHandler}></textarea>
            <button onClick={addPost}>Add post</button>
            <button>Remove</button>
        </div>
        <div className={m.posts}>
            {postsElements}
        </div>
    </div>;
}
