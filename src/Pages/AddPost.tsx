import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editPost, savePost, togglePreview } from '../reducers/postsSlice'
import { RootState } from '../app/rootReducer'
import PostContent from '../components/PostContent'

const AddPost: React.FC = () => {
  const dispatch = useDispatch()
  const { preview, edit } = useSelector((state: RootState) => ({
    preview: state.posts.preview,
    edit: state.posts.edit,
  }))
  const editTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(editPost({ title: e.target.value }))
  }
  const editContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(editPost({ content: e.target.value }))
  }
  const submit = () => {
    dispatch(editPost({ content: '', title: '' }))
    dispatch(savePost(edit))
  }
  const togglePreviewFun = () => dispatch(togglePreview())
  return (
    <div>
      <div>{preview && <PostContent post={edit} />}</div>
      <div className="field">
        <label className="label">Title</label>
        <div className="control">
          <input
            onChange={editTitle}
            className="input"
            value={edit.title}
            type="text"
            placeholder="Title"
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Content</label>
        <div className="control">
          <textarea
            onChange={editContent}
            value={edit.content}
            className="textarea"
            placeholder="Content"
          />
        </div>
      </div>

      <div className="field is-grouped">
        <div className="control">
          <button
            type="button"
            onClick={submit}
            className="button submit is-link"
          >
            Submit
          </button>
        </div>
        <div className="control">
          <button
            type="button"
            onClick={togglePreviewFun}
            className="button preview is-dark"
          >
            {preview ? 'Disable preview' : 'Preview'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddPost
