import { parseISO, formatDistanceToNow } from 'date-fns'
import React from 'react'

const TimeAgo = ({timestamp}) => {
  let timeago = ''
  if(timestamp){
    const date = parseISO(timestamp)
    timeago = `${formatDistanceToNow(date)} ago`;
  }
  return (
    <span className='timeago'>{timeago} </span>
  )
}

export default TimeAgo
