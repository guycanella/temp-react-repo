import React from "react"

import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import PostCard from './PostCard'

const mock = {
    title: 'Title 1',
    content: 'Body 1',
    id: 1,
    imgUrl: 'img/img.png',
    altImg: 'alt de Imagem'
}

describe('<PostCard />', () => {
    it('should render PostCard correctly', () => {
        render(<PostCard {...mock} />)
        
        expect(screen.getByRole('img', { alt: 'alt the Imagem' }))
            .toHaveAttribute('src', mock.imgUrl)
        expect(screen.getByText('Body 1')).toBeInTheDocument
    })

    it('should match snapshot', () => {
        const { container } = render(<PostCard {...mock} />)

        expect(container.firstChild).toMatchSnapshot()
    })
})