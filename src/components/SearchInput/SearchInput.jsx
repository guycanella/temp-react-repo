import React from "react"
import PropTypes from 'prop-types'

import './style.css'

const SearchInput = ({ onchange, searching }) => {
	return (
		<input
			className="search-name"
			type="search"
			onChange={onchange}
			value={searching}
		/>
	)
}

SearchInput.propTypes = {
	onchange: PropTypes.any.isRequired,
	searching: PropTypes.any.isRequired
}

export default SearchInput
