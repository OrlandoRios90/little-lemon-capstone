import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './components/BookingForm';

test('user can submit form if all fields are valid', () => {
  

  const mockPageRedirect = jest.fn();
  const mockUpdateTimes = jest.fn();
  const mockAvailableTimes = jest.fn();

  render(<BookingForm availableTimes={mockAvailableTimes} updateTimes={mockUpdateTimes} submitForm={mockPageRedirect}/>);
  const nameField = screen.getByAltText("name-field");
  fireEvent.change(nameField, {target: {value: "Orlando"}});

  const dateField = screen.getByAltText("date-field");
  fireEvent.change(dateField, {target: {value: "2023-08-23"}});

  const submitButton = screen.getByRole("button");
  fireEvent.click(submitButton);

  expect(mockPageRedirect).toHaveBeenCalled();
});
