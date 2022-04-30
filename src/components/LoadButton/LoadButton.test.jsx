import React from 'react'

import { render, screen } from "@testing-library/react"
import LoadButton from "./LoadButton"

describe('<LoadButton />', () => {
	it('should render the button with text', () => {
		const fn = jest.fn()
		render(<LoadButton text="Load more posts" onclick={fn} disabled/>)

		const button = screen.getByRole('button', { name: /load more/i})
		expect(button).toBeInTheDocument
	})

	// it('should call function on button click', () => {
	// 	const fn = jest.fn()
	// 	render(<LoadButton text="Load more" onclick={fn} />)

	// 	const button = screen.getByRole('button', { name: /load more/i})
	// 	fireEvent.click(button)

	// 	expect(fn).toHaveBeenCalled()
	// })

	// it('should be disabled when disabled is true', () => {
	// 	render(<LoadButton text="Load more" disabled={true} />)

	// 	const button = screen.getByRole('button', { name: /load more/i})
	// 	fireEvent.click(button)

	// 	expect(button).toBeDisabled
	// })
})
