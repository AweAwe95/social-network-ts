import p from "./Post.module.css";
import React from "react";

type PostPropsTypes = {
    message: string
    likeCounter: number
}

export function Post(props: PostPropsTypes) {
    return <div className={p.item}>
        <div>
            <img src="https://assets.vg247.com/current//2017/06/forza_7_header_2.jpg" alt=""/>
            {props.message}
        </div>
        <span>{props.likeCounter}</span>
    </div>;
}