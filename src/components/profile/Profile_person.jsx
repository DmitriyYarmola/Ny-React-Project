import React from 'react';
import './../../css/profile/profile_person.css'
import Post from './Profile_post';

const Persons = () => {
    return (
        <div className="person">
            <div className="person-img">
                <img src="https://sun9-37.userapi.com/c855416/v855416927/203dc8/5u75UMP0CuQ.jpg" />
            </div>
            <div className="person-info">
                <div className="person-discription">
                    <h3 className="discription-title">Discription</h3>
                    <div className="discrioption-content"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quia facere dolorum veniam numquam, esse sequi est repellat asperiores cumque ratione iste at harum. Necessitatibus consequatur doloribus corrupti iste assumenda. </div>
                </div>
                <Post />
            </div>
        </div>
    )
}
export default Persons