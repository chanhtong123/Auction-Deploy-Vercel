# Secondhand Goods Auction System

## Overview
The Secondhand Goods Auction System is a platform designed to connect buyers and sellers of pre-owned items. It reflects a growing trend towards sustainability, affordability, and the appreciation of unique or vintage goods. Whether it's clothing, electronics, furniture, or collectibles, users can auction off their items while contributing to a more circular economy by reducing waste.

## Features
- **User Registration & Authentication**: Secure user sign-up and login functionalities.
- **Auction System**: Users can create, bid, and manage auctions for their items.
- **Product Categories**: Filter items by categories such as clothing, electronics, furniture, and collectibles.
- **Real-time Bidding**: Watch live auction updates in real-time.
- **Notifications**: Get notified about bids, auction status, and transactions.
- **Sustainability Focused**: Promote eco-friendly and affordable shopping.

## Technologies Used
### Backend
- **Java Spring Boot**: Provides the backend REST API to handle auctions, users, and bidding functionalities.
- **MySQL**: Database for storing user, product, and auction data.
- **Spring Security**: For authentication and authorization.
  
### Frontend
- **ReactJS (Vite)**: Fast and efficient front-end framework for building user interfaces.
- **Axios**: For making HTTP requests to the backend API.
- **Tailwind CSS**: For modern, responsive, and customizable design.
  
### Others
- **Docker**: Containerization of the backend and frontend services.
- **JWT (JSON Web Tokens)**: For secure API authentication.

## Getting Started

### Prerequisites
- **Java 17** or higher
- **Node.js** (version 18 or higher)
- **MySQL** (or any other supported relational database)
- **Docker** (optional for containerization)

### Backend Setup (Java Spring Boot)
1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/secondhand-auction-backend.git
    ```
2. Navigate to the project directory:
    ```bash
    cd secondhand-auction-backend
    ```
3. Configure the database in `application.properties`:
    ```properties
    spring.datasource.url=jdbc:mysql://localhost:3306/auction_db
    spring.datasource.username=root
    spring.datasource.password=yourpassword
    ```

4. Build and run the project:
    ```bash
    ./mvnw spring-boot:run
    ```

### Frontend Setup (ReactJS + Vite)
1. Clone the frontend repository:
    ```bash
    git clone https://github.com/your-username/secondhand-auction-frontend.git
    ```
2. Navigate to the project directory:
    ```bash
    cd secondhand-auction-frontend
    ```
3. Install dependencies:
    ```bash
    npm install
    ```

4. Start the development server:
    ```bash
    npm run dev
    ```

### Running with Docker
1. Build and run the containers:
    ```bash
    docker-compose up --build
    ```

## Usage
- After setting up, navigate to `http://localhost:3000` for the frontend and `http://localhost:8080/api` for the backend API.
- Create an account or log in to start bidding on items or creating auctions.

## Screenshots
![Homepage](screenshots/homepage.png)
![Auction Details](screenshots/auction-details.png)

## Contributing
We welcome contributions! Please fork the repository and create a pull request.

## License
This project is licensed under the MIT License.
