import React from 'react'
import Img from './_img/img'
import person from './../../../css/profile/-person/-person.module.css'
import Info from './_info/info'


const Persons = (props) => {
    return (
        <div className={person.person}>
            <Img />
           <Info posts={props.posts}/>
        </div>
    )
}
export default Persons