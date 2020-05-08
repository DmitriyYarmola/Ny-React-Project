import React from 'react'
import style from './userItem.module.css'
import './test.sass'
import { NavLink } from 'react-router-dom'


type PropsType = {
    follow: (userid: number) => void
    unfollow: (userid: number) => void
    photoUrl: string | undefined
    followingInProgress: Array<number | null>
    id: number
    followed: boolean
    key: number
    name: string
    status: string
}
const UserItem: React.FC<PropsType> = ({ follow, unfollow, photoUrl, followingInProgress, id, followed, key, name, status }) => {

    let { users, like, info, description, fullName, userStatus, location, country, city } = style
    let onFollowClick = () => {
        follow(id)
    }

    let onUnfollowClick = () => {
        unfollow(id)
    }
    return (
        <div key={key} className={users}>
            <div className={like}>
                <NavLink to={`/profile/${id}`}>
                    <img src={photoUrl} alt="" />
                </NavLink>
                {followed ? <button disabled={followingInProgress.some(userid => userid === id)} onClick={onUnfollowClick}>Unfollowed</button>
                    : <button disabled={followingInProgress.some(userid => userid === id)} onClick={onFollowClick}>Followed</button>}
            </div>
            <div className={info}>
                <div className={description}>
                    <div className={fullName}>{name}</div>
                    <div className={userStatus}>{status}</div>
                </div>
                <div className={location}>
                    <span className={country}>{"props.location.country"}</span>
                    <span className={city}>{"props.location.city"}</span>
                </div>
            </div>
        </div>
    )
}


export default UserItem