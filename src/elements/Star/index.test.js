import React from 'react'
import Star from './index'
import {render} from '@testing-library/react'

test("Should have props value, height, width, spacing", () => {
    const height=40, width=40, spacing=4;
    const {container} = render(<Star height={height} width={width} spacing={spacing} value={4} />)
    const starYellow = "div.stars div.star:not(.placeholder)"

    expect(container.querySelector("div.stars")).toBeInTheDocument()
    expect(container.querySelector("div.stars")).toHaveAttribute("style", expect.stringContaining(`height: ${height}px`))
    expect(container.querySelector(starYellow)).toBeInTheDocument()
    expect(container.querySelector(starYellow)).toHaveAttribute("style", expect.stringContaining(`height: ${height}px`))
    expect(container.querySelector(starYellow)).toHaveAttribute("style", expect.stringContaining(`width: ${width}px`))
    expect(container.querySelector(starYellow)).toHaveAttribute("style", expect.stringContaining(`margin-right: ${spacing}px`)) 
})