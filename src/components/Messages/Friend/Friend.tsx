import {NavLink} from "react-router-dom";

type FriendType = {
    id: number
    name: string
}

export function Friend(props: FriendType) {
    return <div className="friend">
        <NavLink to={`/messages/${props.id}`}>{props.name}</NavLink>
    </div>;
}