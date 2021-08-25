import us from "./Users.module.css";
import React from "react";
import {UserType} from "../../redux/users-reducer";

type UsersType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: UserType[]
    onPageChanged: (pageNumber: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

export function Users(props: UsersType) {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={us.content}>
            <div>
                {
                    pages.map(p => {
                        return <span className={(props.currentPage === p) ? us.selectedPage : ''}
                                     onClick={() => props.onPageChanged(p)}>{p} </span>
                    })
                }
            </div>
            {
                props.users.map(user => <div key={user.id}>
                    <div>
                        <div>
                            <img
                                src={"https://w1.pngwing.com/pngs/933/945/png-transparent-social-media-icons-avatar-user-profile-login-black-circle-silhouette-symbol.png"}
                                className={us.avatar} alt=""/>
                        </div>
                        <div>
                            {
                                (user.followed) ?
                                    <button onClick={() => props.unfollow(user.id)}>Unfollow</button> :
                                    <button onClick={() => props.follow(user.id)}>Follow</button>
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