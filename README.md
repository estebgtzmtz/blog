# CRUD Blog Post Application

  

This project is a complete CRUD (Create, Read, Update, Delete) application for managing blog posts. It is built using modern web technologies including React, TypeScript, and Vite for the frontend, and Node.js with Express for the backend. The app integrates user authentication through Auth0 and uses MongoDB as the database with Mongoose for data management.

  

## Features

  

-  **Create** new blog posts.

-  **Read** and display all blog posts.

-  **Update** existing blog posts.

-  **Delete** blog posts.

-  **User Authentication** using Auth0 for secure login.

-  **Custom Hooks** and **Context API** for efficient state management.

-  **Responsive UI** built with Material-UI.

-  **Backend API** powered by Express and MongoDB using Mongoose.

  

## Technologies Used

  

-  **Frontend**: React, TypeScript, Vite, Material-UI

-  **Backend**: Node.js, Express.js

-  **Database**: MongoDB (managed through Mongoose)

-  **Authentication**: Auth0

-  **State Management**: Context API and custom hooks

  

## Installation and Setup

  

### Prerequisites

  

Ensure you have the following installed:

  

-  **Node.js**: [Download here](https://nodejs.org/).

-  **MongoDB**: Either run it locally or use [MongoDB Atlas](https://www.mongodb.com/atlas/database) for cloud-based management.

  

### Steps to Install

  

1.  **Clone the repository**:

  

```bash

git clone https://github.com/your-username/crud-blog-post.git

cd crud-blog-post

```

  
2.  **Set up Auth0 credentials**:

- Sign up at [Auth0](https://auth0.com/) and create a new application.

- Obtain your **Domain** and **Client ID** from your Auth0 dashboard.

- Add these values to your `.env` file.

  

### Running the Application



3.  **Start the backend server**:

in 
```bash

src/server

```

  

```bash
npm install

npm run dev

```

  

4.  **Start the frontend server**:

in  
```bash

src

```

```bash
npm install

npm run dev
```

# Configuración de env para FE
VITE_AUTH0_DOMAIN=your-domain
VITE_AUTH0_CLIENT_ID=your-client-id-secret

# Configuración de env para BE
DATABASE_URL=mongodb://localhost:27017/mydatabase=your-domain
ORIGIN=http://localhost:300
