import React from 'react'

export interface Post {
  title?: string
  content?: string
  id?: number
}

type PostContentProps = {
  post: Post
}

const PostContent: React.FC<PostContentProps> = (props: PostContentProps) => {
  const { post } = props
  return (
    <div className="card preview-content">
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{post.title}</p>
            <p className="post-id is-6">ID: {post.id}</p>
          </div>
        </div>
        <div className="content">{post.content}</div>
      </div>
    </div>
  )
}

export default PostContent
