import React from 'react'
import { useDispatch } from 'react-redux'
import { reactionAdded } from './postsSlice'

const reactionEmojis = {
    thumbsUp: "👍",
    wow: "😮",
    heart: "🧡",
    rocket: "🚀",
    coffee: "🫖"
}

const ReactionBtns = ({postId, reactions}) => {
  const dispatch = useDispatch()
  const reactionsBtns = Object.entries(reactionEmojis).map(([name, emoji])=>(
    <button 
        key={name} 
        className='reactionBtn'
        onClick={()=>dispatch(reactionAdded({postId, reaction: name}))}
    >{emoji} {reactions[name]}</button>
  ))
  return <div className='emoji-btns'>{reactionsBtns}</div>
}

export default ReactionBtns
