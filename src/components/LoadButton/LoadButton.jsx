import React from 'react'
import PropTypes from 'prop-types'

import './style.css'

const LoadButton = ({ text, onclick, disabled = false }) => {
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

LoadButton.defaultProps = {
	disabled: false
}

LoadButton.propTypes = {
	text: PropTypes.string.isRequired,
	onclick: PropTypes.func.isRequired,
  disabled: PropTypes.bool
}

export default LoadButton
