import React from 'react'
import { selectAllUsers } from '../users/usersSlice'
import { useSelector } from 'react-redux'

const PostAuthor = ({userId}) => {
    const users = useSelector(selectAllUsers)
    const user = users.find(user=>user.id == userId)
  return (<span>by {user ? user.name : 'Unknown user'}</span>)
}

export default PostAuthor
