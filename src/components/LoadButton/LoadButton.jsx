import React from 'react'
import PropTypes from 'prop-types'

import './style.css'

const LoadButton = (props) => {
  const { text, onclick, disabled } = props

  return (
    <button
      className="load-button"
      onClick={onclick}
      disabled={disabled}
      >
        {text}
    </button>
  )
}

LoadButton.propTypes = {
	text: PropTypes.string.isRequired,
	onclick: PropTypes.any.isRequired,
  disabled: PropTypes.bool.isRequired
}

export default LoadButton
