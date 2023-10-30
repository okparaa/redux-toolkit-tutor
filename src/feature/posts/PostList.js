import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllPosts } from './postsSlice'
import AddPostForm from './AddPostForm'
import PostAuthor from './PostAuthor'
import TimeAgo from './TimeAgo'
import './posts.css'
import ReactionBtns from './ReactionBtns'

const PostList = () => {
    const posts = useSelector(selectAllPosts)
    const orderedPosts = posts.slice().sort((a,b)=>b.date.localeCompare(a.date))
    const renderPosts = orderedPosts.map((post)=>(
        <article key={post.id} className='posts'>
            <h2>{post.title}</h2>
            <p>{post.content.substring(0, 100)}</p>
            <p className='postCredit'>
                <PostAuthor userId={post.userId} /> 
                <TimeAgo timestamp={post.date} />
                <ReactionBtns postId={post.id} reactions={post.reactions} />
            </p>
        </article>
    ));

    return (
        <section className='cards'>
            <h2>Posts</h2>
            <AddPostForm /> 
            {renderPosts}
        </section>
    )
}

export default PostList
