# ShareEase

**ShareEase** is a platform for easily sharing files, including images, PDFs, documents, and code snippets. Built with the MERN stack and Tailwind CSS, it offers a user-friendly interface for efficient file sharing.

## Features

- Upload and share images via Imgur's API
- Share PDFs and Word documents
- Share code snippets with syntax highlighting using GitHub Gists
- Responsive design for desktop and mobile

## Technologies

- MERN Stack (MongoDB, Express.js, React, Node.js)
- Tailwind CSS
- Multer for file uploads
- Axios for API requests

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/KRSNAGUPTA/shareease.git
   cd shareease
   ```

2. Set up backend:
   ```bash
   cd backend
   npm install
   cp sampleEnv .env
   # Edit .env with your credentials
   ```

3. Set up frontend:
   ```bash
   cd ../frontend
   npm install
   cp sampleEnv .env
   # Edit .env with your credentials
   ```

4. Start the applications:
   ```bash
   # In the backend directory
   npm run dev

   # Open a new terminal, navigate to the frontend directory
   npm run dev
   ```

## Contributing

We welcome contributions! Please fork the repository and submit a pull request.
