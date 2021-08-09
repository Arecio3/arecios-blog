import React from 'react'
import Post from '../post/Post'
import './posts.css'

export default function Posts({posts}) {
    return (
        <div className='posts'>
            {posts.map((post, index) => (
            <Post post={post} key={index}/>
            ))}
        </div>
    )
}
