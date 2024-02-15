/**
 * Necessary testing imports
 */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

/**
 * Importing related component & creating mock function
 */
import CreateForm from '../components/CreateForm'
const mockOnAdd = jest.fn()

// Basic component rendered
test('renders the CreateForm correctly', async () => {
  // render
  render(<CreateForm onAdd={mockOnAdd}/>)

  // Check if the form elements are rendered
  expect(screen.getByText('add a contact')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('name')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('number')).toBeInTheDocument();
  expect(screen.getByText('add')).toBeInTheDocument();
})


// Checks if the button click is registered
test('Button click should occur once', async () => {
  // render
  render(<CreateForm onAdd={mockOnAdd}/>)
  // click
  userEvent
    .click(screen.getByText('add'))
    .then(() => {
      // event should occur
      expect(mockOnAdd).toHaveBeenCalledTimes(1)
    })
})