import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../app/rootReducer'
import { getPosts } from '../reducers/postsSlice'
import PostContent from '../components/PostContent'

type PostProps = {
  max: number
}

const Posts: React.FC<PostProps> = (props: PostProps) => {
  const { max } = props
  const dispatch = useDispatch()
  const posts = useSelector((state: RootState) => state.posts.all).slice(-max)

  useEffect(() => {
    dispatch(getPosts())
  }, [])

  return (
    <div>
      {posts.map((post: any) => (
        <div key={post.id}>
          <PostContent post={post} />
        </div>
      ))}
    </div>
  )
}

export default Posts
