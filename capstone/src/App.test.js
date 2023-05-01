import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "./components/form/BookingForm.component";
import { MemoryRouter } from "react-router-dom";
import BookingPage from "./routes/booking/booking.route-component";

describe("Booking form", () => {
  const availableTimes = ["17:00", "17:30"];
  const today = new Date().toISOString().split("T")[0];
  const dispatchOnDateChange = jest.fn();
  const submitData = jest.fn();

  test("should correctly render all fields and their default values", async () => {
    render(
      <BookingForm availableTimes={availableTimes} submitData={submitData} />
    );

    const dateInput = screen.getByLabelText(/Date/);
    const timeSelect = screen.getByLabelText(/Time/);
    const timeOptions = await screen.findAllByTestId("booking-time-option");
    const numberOfGuestsInput = screen.getByLabelText(/Number of guests/);
    const occasionSelect = screen.getByLabelText(/Occasion/);
    const occasionOptions = await screen.findAllByTestId(
      `booking-occasion-option`
    );
    const submitButton = screen.getByRole("button");

    expect(dateInput).toBeInTheDocument();
    expect(dateInput).toHaveAttribute("type", "date");
    expect(dateInput).toHaveAttribute("id", "booking-date");
    expect(dateInput).toHaveValue(today);

    expect(timeSelect).toBeInTheDocument();
    expect(timeSelect).toHaveAttribute("id", "booking-time");
    expect(timeOptions.length).toBe(2);

    expect(numberOfGuestsInput).toBeInTheDocument();
    expect(numberOfGuestsInput).toHaveAttribute("id", "booking-number-guests");
    expect(numberOfGuestsInput).toHaveAttribute("type", "number");
    expect(numberOfGuestsInput).toHaveValue(1);

    expect(occasionSelect).toBeInTheDocument();
    expect(occasionSelect).toHaveAttribute("id", "booking-occasion");
    expect(occasionOptions.length).toBe(3);

    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveAttribute("type", "submit");
    expect(submitButton).toBeEnabled();
  });

  test("should successfully submit form with default values", () => {
    render(
      <BookingForm availableTimes={availableTimes} submitData={submitData} />
    );

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);

    expect(submitData).toHaveBeenCalledWith({
      date: today,
      time: availableTimes[0],
      numberOfGuests: 1,
      occasion: "Regular",
    });
  });

  test(`should display an error message and disable sumbit button when date
    field's value is empty`, () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatchOnDateChange={dispatchOnDateChange}
        submitData={submitData}
      />
    );

    const dateInput = screen.getByLabelText(/Date/);
    fireEvent.change(dateInput, { target: { value: "" } });
    fireEvent.blur(dateInput);
    const errorMessage = screen.getByTestId("error-message");
    const submitButton = screen.getByRole("button");

    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveTextContent("Please choose a valid date");
    expect(submitButton).toBeDisabled();
  });

  test(`should display an error message and disable sumbit button when number of
    guests field's value is empty`, () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatchOnDateChange={dispatchOnDateChange}
        submitData={submitData}
      />
    );

    const numberOfGuestsInput = screen.getByLabelText(/Number of guests/);
    fireEvent.change(numberOfGuestsInput, { target: { value: "" } });
    fireEvent.blur(numberOfGuestsInput);
    const errorMessage = screen.getByTestId("error-message");
    const submitButton = screen.getByRole("button");

    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveTextContent(
      "Please enter a number between 1 and 7"
    );
    expect(submitButton).toBeDisabled();
  });
});

describe("Booking page", () => {
  const timeFormat = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;

  test("should have one or more available booking time options", async () => {
    render(
      <MemoryRouter>
        <BookingPage />
      </MemoryRouter>
    );

    const timeOptions = await screen.findAllByTestId("booking-time-option");

    expect(timeOptions.length).toBeGreaterThanOrEqual(1);
    timeOptions.forEach((timeOption) =>
      expect(timeOption.value).toMatch(timeFormat)
    );
  });

  test("should update available booking time options when changing booking date", async () => {
    render(
      <MemoryRouter>
        <BookingPage />
      </MemoryRouter>
    );

    const bookingDate = "2023-07-01";
    const dateInput = screen.getByLabelText(/Date/);
    const initialTimeOptions = await screen.findAllByTestId(
      "booking-time-option"
    );
    fireEvent.change(dateInput, { target: { value: bookingDate } });
    fireEvent.blur(dateInput);
    const updatedTimeOptions = await screen.findAllByTestId(
      "booking-time-option"
    );

    expect(dateInput).toHaveValue(bookingDate);
    initialTimeOptions.forEach((timeOption) =>
      expect(timeOption.value).toMatch(timeFormat)
    );
    updatedTimeOptions.forEach((timeOption) =>
      expect(timeOption.value).toMatch(timeFormat)
    );
    expect(initialTimeOptions.length).not.toBe(updatedTimeOptions.length);
  });

  //test('', () => {});
});
