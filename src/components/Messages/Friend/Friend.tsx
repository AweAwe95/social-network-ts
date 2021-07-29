import {NavLink} from "react-router-dom";
type FriendTypes = {
    id: number
    name: string
}

export function Friend(props: FriendTypes) {
    return <div className="friend">
        <NavLink to={`/messages/${props.id}`}>{props.name}</NavLink>
    </div>;
}