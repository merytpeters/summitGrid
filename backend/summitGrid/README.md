# SummitGrid Api
SummitGrid API is the backend service for managing events, users, and related data for the SummitGrid platform, built with Express.js, MongoDB, and Swagger for API documentation.

## Features

- RESTful API endpoints for event management
- User authentication and authorization
- MongoDB integration for persistent storage
- Input validation and error handling
- Interactive API documentation with Swagger

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- MongoDB instance (local or cloud)

### Installation

```bash
git clone https://github.com/your-org/summitGrid.git
cd summitGrid/backend/summitGrid
npm install
```

### Running the Server

```bash
npm start
```

The API will be available at `http://localhost:3000/api`.

### Environment Variables

Create a `.env` file in the project root with the following variables:

```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=3000
```

## API Documentation

Interactive API docs are available at `http://localhost:3000/api-docs` (Swagger UI).

## Project Structure

```
summitGrid/
├── server.js
├── models/
├── routes/
├── controllers/
├── middleware/
├── utils/
└── README.md
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License.
