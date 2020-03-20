import React from 'react';
import './../../css/profile/profile_post.css'

const Post = () => {
    return (
        <div className="post-info">
            <h3 className="post-title">My posts</h3>
            <div className="post-button">
                <button>New Post</button>
            </div>

            <div className="post-list">   
                <div className="post-item">
                    <h4 className="post-item_title">My story</h4>
                    <div className="post-item_content"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae nesciunt aliquam dolorem voluptatem recusandae rerum quisquam repellat voluptatum animi neque adipisci molestiae totam, quod ipsam dolorum eius qui assumenda cum!</div>
                </div>

                <div className="post-item">
                <h4 className="post-item_title">My news</h4>
                    <div className="post-item_content"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus cumque facilis, commodi animi corrupti ab ratione voluptate nostrum earum autem, dolorem illum hic cum veniam fugit necessitatibus odit aut voluptatem.</div>
                </div>
            </div>
        </div>
    )
}

export default Post