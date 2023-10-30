import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
    {
        id: '1', 
        title: 'learning Redux Toolkit', 
        content: 'I have heard a lot of good things about redux toolkit',
        date: sub(new Date(), {minutes: 7}).toISOString(),
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
        }
    },
    {
        id: '2', 
        title: 'Slices...', 
        content: 'The more i say slice, the more I want pizza',
        date: sub(new Date(), {minutes: 27}).toISOString(),
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
        }
    }
]
export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action){
                state.push(action.payload)
            },
            prepare(title, content, userId){
                let data = { 
                    payload: {
                        id: nanoid(),
                        userId,
                        title,
                        date: new Date().toISOString(),
                        content,
                        reactions: {
                            thumbsUp: 0,
                            wow: 0,
                            heart: 0,
                            rocket: 0,
                            coffee: 0
                        }
                    }
                }
                return data
            }
        },
        reactionAdded: (state, action) => {
            const { postId, reaction} = action.payload
            const existingPost = state.find(post => post.id == postId)
            if(existingPost){
                existingPost.reactions[reaction]++
            }
        }
    }
})
export const { postAdded, reactionAdded } = postsSlice.actions
export const selectAllPosts = (state)=>state.posts
export default postsSlice.reducer