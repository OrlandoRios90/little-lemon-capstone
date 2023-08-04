import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './components/BookingForm';
import BookingPage from './components/BookingPage';


describe('initializeTimes', () => {
  it('calls fetchAPI and dispatches an action with the returned times', async () => {

    const mockDispatch = jest.fn();
    const mockFetchAPI = jest.fn(() => Promise.resolve(['17:00 PM', '19:00 PM', '21:00 PM']));

    await initializeTimes()(mockDispatch, undefined, { fetchAPI: mockFetchAPI });

    expect(mockFetchAPI).toHaveBeenCalled();
    expect(mockDispatch).toHaveBeenCalledWith({
      type: INITIALIZE_TIMES,
      times: ['17:00 PM', '19:00 PM', '21:00 PM'],
    });
  });
});

/*

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

*/
