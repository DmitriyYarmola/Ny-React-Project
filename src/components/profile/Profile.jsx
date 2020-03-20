import React from 'react';
import Persons from './Profile_person'
import './../../css/profile/profile.css'
import ProfileImg from './Profile_img';

const Profile = () => {
    return (
        <div className="content">
            <ProfileImg />

            <Persons />

        </div>
    )
}

export default Profile;

