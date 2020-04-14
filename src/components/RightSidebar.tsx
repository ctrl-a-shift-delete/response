import React from 'react'
import Posts from '../Pages/Posts'

const RightSidebar: React.FC = () => {
  return (
    <div>
      <Posts max={3} />
    </div>
  )
}

export default RightSidebar
