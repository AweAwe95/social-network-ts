import {NavLink} from "react-router-dom";


export function Friend(props) {
    return <div className="friend">
        <NavLink to={`/messages/${props.id}`}>{props.name}</NavLink>
    </div>;
}