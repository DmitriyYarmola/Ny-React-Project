import React from 'react'
import Posts from '../../-posts/posts'
import Description from './description/description'
import info from './../../../../css/profile/-person/_info/_info.module.css'

const Info = (props) => {
    return (
        <div className={info.info}>
            <Description />
            <Posts posts={props.posts} />
        </div>
    )
}
export default Info