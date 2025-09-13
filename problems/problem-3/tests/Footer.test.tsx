import { render, screen } from '@testing-library/react'
import Footer from '../src/components/Footer'

describe('Footer', () => {
  test('renders correctly with current year and links', () => {
    render(<Footer />)

    // Check for current year
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(`© ${year}ShopEase`, 'i'))).toBeInTheDocument()

    // Check for links
    expect(screen.getByText(/About/i)).toBeInTheDocument()
    expect(screen.getByText(/Contact/i)).toBeInTheDocument()
    expect(screen.getByText(/Privacy/i)).toBeInTheDocument()
  })
})
