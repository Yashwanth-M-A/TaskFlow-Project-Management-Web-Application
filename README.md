
# TaskFlow

TaskFlow is a premium, modern Project Management Web Application inspired by industry leaders like Jira, Linear, Notion, and Asana. Built with the powerful MERN Stack (MongoDB, Express.js, React.js, Node.js), it offers a seamless, high-performance workspace to organize tasks, collaborate with teams, and hit deadlines without breaking a sweat.

## Features

- **Modern UI/UX**: Built with React, Tailwind CSS, and Framer Motion for sleek animations, glassmorphism, and a highly professional dashboard.
- **Authentication**: Secure JWT-based authentication with bcrypt hashing.
- **Role-Based Access**: Support for Admins, Project Managers, and Team Members.
- **Real-Time Collaboration**: Powered by Socket.io for instant updates across the workspace.
- **Kanban Board**: Drag-and-drop task management interface.
- **Advanced Dashboard**: Visualizations and analytics using Recharts.

## Tech Stack

**Frontend:**
- React.js (Vite)
- Tailwind CSS
- Framer Motion
- React Router DOM
- Redux Toolkit
- Recharts
- Lucide Icons

**Backend:**
- Node.js
- Express.js
- MongoDB (Mongoose)
- Socket.io
- JSON Web Tokens (JWT)

## Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB Atlas URI or Local MongoDB instance

### Installation

1. **Clone the repository** (if applicable) and navigate to the project directory.

2. **Backend Setup**
   ```bash
   cd server
   npm install
   # Create a .env file with PORT, MONGO_URI, JWT_SECRET
   npm run dev
   ```

3. **Frontend Setup**
   ```bash
   cd client
   npm install
   npm run dev
   ```

## Production Ready Features
- REST API Architecture
- Middleware for authentication and error handling
- Mongoose Models with structured schemas
- Environment variable management
- Clean and scalable folder structure

## License
MIT License
