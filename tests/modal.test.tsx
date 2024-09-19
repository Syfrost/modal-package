import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ModalComponent from '../src/components/app';

describe('ModalComponent', () => {
  it('renders with the correct content', () => {
    render(<ModalComponent content="Example text" />);
    expect(screen.getByText('Example text')).toBeTruthy();
    expect(document.querySelector('.modal-content')).toBeTruthy();
  });

  it('closes when the close button is clicked', () => {
    render(<ModalComponent content="Example text" />);
    fireEvent.click(screen.getByText('X'));
    expect(screen.queryByText('Example text')).toBeNull();
    expect(document.querySelector('.modal-content')).toBeNull();
  });

  it('is initially open', () => {
    render(<ModalComponent content="Example text" />);
    expect(screen.getByText('Example text')).toBeTruthy();
    expect(document.querySelector('.modal-content')).toBeTruthy();
  });
});