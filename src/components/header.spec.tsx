import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from './header'

describe('Header', () => {
  test('should render the header component with text', () => {
    render(<Header />)
    const headerElement = screen.getByRole('banner')
    expect(headerElement).toBeDefined()
  })
})
