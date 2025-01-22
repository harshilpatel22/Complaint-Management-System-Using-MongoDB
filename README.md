# Complaint Management System

A web-based **Complaint Management System** built using **Node.js**, **Express.js**, and **MongoDB** as the backend database. 
This application allows users to register, log in, and submit complaints, which are stored securely in a MongoDB database.

---

## Features

- **User Authentication**: Users can sign up and log in securely using hashed passwords.
- **Complaint Submission**: Authenticated users can submit complaints with a unique complaint number.
- **Session Management**: Secure session handling using `express-session`.
- **MongoDB Integration**: Complaints and user data are stored in a MongoDB Atlas database.

---

## Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Backend framework for creating server-side applications.
- **MongoDB Atlas**: Cloud-based NoSQL database for storing user and complaint data.
- **bcrypt**: For securely hashing passwords.
- **express-session**: Session management for user authentication.

---

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/complaint-management-system.git
   cd complaint-management-system
2. Install the required dependencies
3. Set up the MongoDB Atlas connection:
    Update the uri variable in nodeServer.js with your MongoDB Atlas connection string.
4. Start the server using - node nodeServer.js

## Usage

**User Authentication**
  Signup: Users can register with a unique username and password.
  Login: Registered users can log in to access the complaint submission form.
**Complaint Submission**
  Users can submit complaints by filling out the form with:
    Registration ID
    Complaint Type
    Complaint Text
    Each complaint is assigned a unique complaint number.
**Complaint Storage**
  Complaints are stored in the MongoDB database with a timestamp and associated user details.

## Setting Up MongoDB Atlas with VS Code
Follow these steps to configure MongoDB Atlas for use with VS Code in this project:

  1. Create a MongoDB Atlas Account
    Visit MongoDB Atlas and create a free account.
  2. Create a Cluster
    After logging in, create a new cluster.
    Choose a free tier cluster and select your preferred cloud provider and region.
  3. Connect to the Cluster
    Once the cluster is created, click on the "Connect" button.
    Choose "Connect your application" and copy the connection string. Example:
      mongodb+srv://<username>:<password>@clustername.mongodb.net/<dbname>?retryWrites=true&w=majority
  4. Replace Credentials
    Replace <username>, <password>, and <dbname> in the connection string with:
      Your MongoDB Atlas username and password.
      The name of your database (e.g., complaintsDB).
  5. Paste the URI into the Project
    Open the nodeServer.js file.
    Update the uri variable with your MongoDB Atlas connection string:
      const uri = 'mongodb+srv://<username>:<password>@clustername.mongodb.net/complaintsDB?retryWrites=true&w=majority';
  6. Install the MongoDB Extension for VS Code
    In VS Code, go to the Extensions view (Ctrl+Shift+X or Cmd+Shift+X on macOS).
    Search for "MongoDB for VS Code" and install it.
  7. Connect VS Code to MongoDB Atlas
    Open the MongoDB tab in VS Code (look for the leaf icon in the Activity Bar).
    Click "Add Connection" and paste your MongoDB Atlas connection string.
    You can now view and manage your database directly from VS Code.
