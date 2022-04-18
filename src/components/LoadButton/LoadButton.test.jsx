import React from "react"

import { render, screen } from "@testing-library/react"
import LoadButton from "./LoadButton"

describe('<LoadButton />', () => {
	it('should render the button with text', () => {
		const fn = jest.fn()
		render(<LoadButton text="Load more posts" onclick={fn} disabled/>)

		const button = screen.getByRole('button', { name: /load more/i})
		expect(button).toBeInTheDocument
	})
})