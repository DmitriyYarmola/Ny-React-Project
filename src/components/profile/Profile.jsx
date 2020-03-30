import React from 'react';
import Persons from './-person/person'
import ProfileImg from './-img/img';
import profile from './../../css/profile/profile.module.css'

const Profile = (props) => {
    return (
        <div className={profile.profile}>
            <ProfileImg />
            <Persons posts={props.posts} />
        </div>
    )
}

export default Profile

