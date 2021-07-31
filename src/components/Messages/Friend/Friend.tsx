import {NavLink} from "react-router-dom";

type FriendPropsType = {
    id: number
    name: string
}

export function Friend(props: FriendPropsType) {
    return <div className="friend">
        <NavLink to={`/messages/${props.id}`}>{props.name}</NavLink>
    </div>;
}