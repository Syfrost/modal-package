import * as React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import ModalComponent from '../src/components/app'

describe('ModalComponent', () => {
  it('renders with the correct content', () => {
    render(<ModalComponent content='Example text' />)
    expect(screen.getByText('Example text')).toBeTruthy()
    expect(document.querySelector('.modal-content')).toBeTruthy()
  })

  it('closes when the close button is clicked', () => {
    render(<ModalComponent content='Example text' />)
    fireEvent.click(document.querySelector('.close-modal svg')!)
    expect(screen.queryByText('Example text')).toBeNull()
    expect(document.querySelector('.modal-content')).toBeNull()
    expect(document.querySelector('.modal')).toBeNull()
  })

  it('is initially open', () => {
    render(<ModalComponent content='Example text' />)
    expect(screen.getByText('Example text')).toBeTruthy()
    expect(document.querySelector('.modal-content')).toBeTruthy()
  })

  it('calls onClose when the close button is clicked', () => {
    const onCloseMock = jest.fn()
    render(<ModalComponent content='Example text' onClose={onCloseMock} />)
    fireEvent.click(document.querySelector('.close-modal svg')!)
    expect(onCloseMock).toHaveBeenCalledTimes(1)
  })
})
