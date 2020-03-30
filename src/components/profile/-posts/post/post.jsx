import React from 'react'
import post from './../../../../css/profile/-posts/_post/post.module.css'

const Post = (props) => {
    return (
        <div className={post.item}>
            <h4 className={post.title}>{props.title}</h4>
            <div className={post.content}>{props.message}</div>
        </div>
    )
}

export default Post