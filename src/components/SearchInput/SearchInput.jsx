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
	onchange: PropTypes.func.isRequired,
	searching: PropTypes.string.isRequired
}

export default SearchInput
