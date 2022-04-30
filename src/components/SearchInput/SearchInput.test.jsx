import React from 'react'

import { render } from "@testing-library/react"
import SearchInput from "./SearchInput"

describe('<SearchInput />', () => {
    it('should render handleSearch function on each key pressed', () => {
        const fn = jest.fn()
        render(<SearchInput onchange={fn} searching='testando' />)
    })

    it('should have a value of searchValue', () => {
        const fn = jest.fn()
        render(<SearchInput onchange={fn} searching='testando' />)
    })
})