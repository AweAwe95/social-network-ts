import React from "react";
import us from './Users.module.css'
import axios from "axios";
import {UserType} from "../../redux/users-reducer";

type UsersPageType = {
    users: UserType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
}

export class Users extends React.Component<UsersPageType> {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return (
            <div className={us.content}>
                {
                    this.props.users.map(user => <div key={user.id}>
                        <div>
                            <div>
                                <img
                                    src={"https://w1.pngwing.com/pngs/933/945/png-transparent-social-media-icons-avatar-user-profile-login-black-circle-silhouette-symbol.png  "}
                                    className={us.avatar} alt=""/>
                            </div>
                            <div>
                                {
                                    (user.followed) ?
                                        <button onClick={() => this.props.unfollow(user.id)}>Unfollow</button> :
                                        <button onClick={() => this.props.follow(user.id)}>Follow</button>
                                }
                            </div>
                        </div>
                        <div>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                            <span>
                            <div>"u.location.country"</div>
                            <div>"u.location.city"</div>
                        </span>
                        </div>
                    </div>)
                }
            </div>
        )
    }
}