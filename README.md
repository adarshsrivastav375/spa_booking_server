# Salon & Spa Reservation App

Welcome to the Salon & Spa Reservation App! This project aims to provide a seamless booking experience for salons, spas, and their customers. With features such as business registration, customer booking, intuitive scheduling, and more, this app revolutionizes the way salon and spa appointments are managed.

## Features

- **Business Registration:** Salon and spa owners can register their businesses on the app, providing essential details such as company name, GSTIN, PAN number, address, work schedule, services offered, and the number of chairs available.

- **Customer Booking:** Customers can easily search for salons and spas by name, view available services and time slots for the next 7 days, and book appointments conveniently.

- **Booking Management:** Customers have the flexibility to cancel upcoming bookings within 24 hours of the scheduled service start time.

- **Intuitive Booking System:** All services adhere to specific start times at the 0th, 15th, 30th, or 45th minute of each hour, ensuring efficient scheduling and resource allocation.

## Technologies Used

- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Object Modeling:** Mongoose
- **Authentication:** JWT (JSON Web Tokens)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/salon-spa-reservation-app.git
   
2. **Install dependencies:**

    ```bash
     cd salon-spa-reservation-app
     npm install

## Set up environment variables:

  **Create a .env file in the root directory and add the following:**

    PORT=6000
    MONGODB_URI=Your url


  **Start the server:**

     ```bash
       npm start

## API Endpoints
   - register a business : POST /api/businesses/sign-up
   - log in to business : POST /api/businesses/login
   - Paginated Search for Businesses: GET /api/businesses/
   - upadete Business details: PUT /api/businesses/:id
   - register a user : POST /api/customers/sign-up
   - log in to user : POST /api/customers/login
   - upadete user details: PUT /api/customers/:id
   - List Available Services and Time Slots for a Business: GET /api/businesses/:id/services
   - Book a Service at a Business: POST /api/bookings
   - Booking Report for the Month: GET /api/reports/monthly

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to contribute to the project.

## License
This project is licensed under the MIT License.
