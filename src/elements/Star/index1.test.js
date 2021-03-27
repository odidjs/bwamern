import React from 'react'
import {render} from '@testing-library/react'
import Star from './index.scss'

test("Should have props value, height, width, spacing", () => {

    const height=40, width=40, spacing=4
    const {container} = render(<Star height={height} width={width} spacing={spacing} value={4} />)
    const starYellow = "div.stars div.star:not(.placeholder)"

    
    expect(container.querySelector(starYellow)).toBeInTheDocument()
})