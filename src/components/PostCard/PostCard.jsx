import React from "react"
import PropTypes from 'prop-types'

import './style.css'

const PostCard = (props) => {
	const { title, content, imgUrl, altImg, id } = props

  return (
    <div className="post" key={`post-${id}`}>
      <img src={imgUrl} alt={altImg} />
      <div className="post-content">
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
    </div>
  )
}

PostCard.propTypes = {
	title: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
	imgUrl: PropTypes.string.isRequired,
	altImg: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}

export default PostCard
