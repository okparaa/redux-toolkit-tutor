import React, { useState } from 'react'
import { postAdded } from './postsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { selectAllUsers } from '../users/usersSlice'

const AddPostForm = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('')
    const users = useSelector(selectAllUsers)
    const dispatch = useDispatch()
    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)
    const onUserChanged = e => setUserId(e.target.value)
    const canSave = Boolean(title) && Boolean(content) && Boolean(userId)
    const onSavePost = () => {
        if(canSave){
            dispatch(
                postAdded(title,content, userId)
            )
            setContent('')
            setTitle('')
            setUserId('')
        }
    }

    const userOptions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))
  return (
   <section className='post-form'>
    <h2>Add a new Post</h2>
    <form>
        <label htmlFor="postTile">Post Title</label>
        <input type="text"
            id='postTitle'
            name='postTitle'
            value={title}
            onChange={onTitleChanged} 
        />
        <label htmlFor="postAuthor"></label>
        <select onChange={onUserChanged} value={userId} id="postAuthor">
            <option value="">-select-</option>
            {userOptions}
        </select>

        <label htmlFor="postContent">Post Content</label>
        <textarea
            id='postContent'
            name='postContent'
            value={content}
            onChange={onContentChanged} 
        ></textarea>
        <button disabled={!canSave}
            type='button'
            onClick={onSavePost}
        >Save Post</button>
    </form>
   </section>
  )
}

export default AddPostForm
