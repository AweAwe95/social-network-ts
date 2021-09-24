import us from "./Users.module.css";
import React from "react";
import {NavLink} from 'react-router-dom'
import {followUser, unfollowUser} from "../../api/api";
import {UserType} from "../../redux/users-reducer";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: UserType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    toggleIsFollowingProgress: (toggleIsFollowing: boolean, userId: number) => void
    followingInProgress: number[]
}

export function Users(props: UsersPropsType) {

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
                            <NavLink to={'/profile/' + user.id}>
                                <img
                                    src={user.photos.small != null ? user.photos.small : "https://w1.pngwing.com/pngs/933/945/png-transparent-social-media-icons-avatar-user-profile-login-black-circle-silhouette-symbol.png"}
                                    className={us.avatar} alt=""/>
                            </NavLink>
                        </div>
                        <div>
                            {
                                (user.followed) ?
                                    <button disabled={props.followingInProgress.some(id => id === user.id)}
                                            onClick={() => {
                                                props.toggleIsFollowingProgress(true, user.id)
                                                unfollowUser(user.id).then(data => {
                                                    if (data.resultCode == 0) {
                                                        props.unfollow(user.id)
                                                    }
                                                    props.toggleIsFollowingProgress(false, user.id)
                                                })

                                            }
                                            }>
                                        Unfollow</button> :
                                    <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                        props.toggleIsFollowingProgress(true, user.id)
                                        followUser(user.id).then(data => {
                                            if (data.resultCode == 0) {
                                                props.follow(user.id)
                                            }
                                            props.toggleIsFollowingProgress(false, user.id)
                                        })
                                    }
                                    }>
                                        Follow</button>
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