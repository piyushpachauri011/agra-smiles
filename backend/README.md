# Agra Smiles Backend

Backend API for Agra Smiles Dental Clinic

## Project Structure

```
src/
├── config/
│   └── database.ts      # MongoDB configuration
├── controllers/         # Business logic handlers
├── models/
│   ├── Appointment.ts   # Appointment schema
│   └── Contact.ts       # Contact message schema
├── routes/
│   ├── appointments.ts  # Appointment endpoints
│   └── contact.ts       # Contact endpoints
├── middleware/          # Custom middleware
└── server.ts           # Main server file
```

## Installation

```bash
npm install
```

## Environment Variables

Create a `.env` file in the backend directory with:

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/agra-smiles
NODE_ENV=development
JWT_SECRET=your_jwt_secret_key_here
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
FRONTEND_URL=http://localhost:5173
```

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Start Production

```bash
npm start
```

## API Endpoints

- `GET /api/health` - Server health check
- `GET /api/appointments` - Get all appointments
- `POST /api/appointments` - Create new appointment
- `GET /api/contact` - Get all contact messages
- `POST /api/contact` - Send contact message
