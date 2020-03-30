import React from 'react';
import Post from './post/post'
import Title from './title/title'
import Button from './button/button'
import posts from './../../../css/profile/-posts/-posts.module.css'

const Posts = (props) => {

    // let postsData = [
    //     {id: 1, title: 'My story', message: 'Hello, how are you?'},
    //     {id: 1, title: 'Second post', message: 'Test message, oh dadada'}
    // ]

    let postsItem = props.posts.map( post => {
        return <Post title={post.title} message={post.message} />
    })
    return (
        <div className={posts.info}>
            <Title />
            <Button />

            <div className={posts.list}>   
                {postsItem}
            </div>
        </div>
    )
}

export default Posts