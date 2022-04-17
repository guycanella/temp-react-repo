import React from "react"
import PropTypes from 'prop-types'

import PostCard from "../PostCard"

import './style.css'

const Posts = (props) => {
	const { posts } = props
	
  return (
    <div className="posts">
      {posts.map((post, idx) => (
        <PostCard
          title={post.title}
          content={post.body}
          imgUrl={post.cover}
          altImg={post.coverTitle}
          key={idx}
          id={idx}
        />
      ))}
    </div>
  )
}

Posts.propTypes = {
	posts: PropTypes.array.isRequired
}

export default Posts
