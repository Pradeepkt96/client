# My Node.js Application

This is a Node.js application built using Express.js that provides user authentication features, including registration and login functionalities. The application connects to a MongoDB database using Mongoose and implements JSON Web Tokens (JWT) for secure authentication.

## Features

- User registration with username, email, phone number, and password.
- User login with email and password.
- JWT-based authentication for secure access to protected routes.
- MongoDB database connection using Mongoose.
- Contact form submission with username, email, and message.
- Fetch patient Information on dashboard.

## Project Structure

```
my-node-app
├── config
│   └── db.js                # Database connection configuration
├── controllers
│   ├── authController.js    # Authentication logic
├── middleware
│   └── auth.js              # JWT verification middleware
├── models
│   ├── User.js              # User model definition
│   ├── Contact.js           # Contact model definition
│   └── Home.js              # Health updates model definition
├── routes
│   ├── auth.js              # Authentication routes
│   ├── contact.js           # Contact form routes
│   └── home.js              # Health updates routes
├── .env                     # Environment variables
├── package.json             # Project dependencies and scripts
├── server.js                # Entry point of the application
└── README.md                # Project documentation
```

## Installation

1. Clone the repository:

   ```sh
   git clone <repository-url>
   cd my-node-app
   ```

2. Install the dependencies:

   ```sh
   npm install
   ```

3. Create a `.env` file in the root directory and add your MongoDB connection string and JWT secret:

   ```sh
   MONGO_URI=<your_mongodb_connection_string>
   JWT_SECRET=<your_jwt_secret>
   ```

## Usage

1. Start the server:

   ```sh
   node server (Backend)
   npm start  (Frontend)
   ```

2. Access the application in your browser at `http://localhost:5000`.

## API Endpoints

- `POST /api/auth/register` - Register a new user.
- `POST /api/auth/login` - Log in an existing user.
- `POST /api/contact` - Submit a contact form.
- `GET /api/home` - Fetch health updates.
- `GET /api/patient/dashboard` - Fetch patient Info dashboard.
<!-- 
## License

This project is licensed under the MIT License. -->