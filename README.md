# 🚀 Mars Explorer

A full-stack web application that provides interactive access to Mars exploration data, built with **React.js (frontend)** and **Node.js (backend)**.

## 🌟 Features
- **Mars Rover Gallery**: View images captured by NASA’s Mars Rovers and filter them by camera and Sol (Martian day).
- **Mars Weather Reports**: Fetches live weather data from the **InSight Mars Weather Service API**.
- **Real-time Data Updates**: Backend built with **Node.js and Express.js**, deployed on **Render**.


## 🛠️ Tech Stack
### Frontend
- **React.js** (with PrimeReact)
- **Lottie for animations**
- **CSS for styling**
- **Render for deployment**

### Backend
- **Node.js + Express.js**
- **Axios for API requests**
- **Deployed on Render**

## 🎬 Demo
🔗 **Live Demo:** https://nasa-project-2-48mr.onrender.com/

## 📂 Project Structure
/Nasa-project 
│── /frontend # React app 
│ ├── /mars-explorer
│ │ ├── /public # Static assets (images, animations, etc.) 
│ │ ├── /src  
│ │ │ ├── /assets # App images and animations 
│ │ │ ├── /components # components 
│ │ │ ├── /pages # page-level components
│ │ │ ├── /services # API requests and data processing.
│ │ │ ├── /data # data files 
│ │ │ ├── /utils # utility functions 
│ │ │ ├── App.js 
│ │ │ ├── App.css 
│── /backend # Node.js API 
│ ├── nasa-apis 
│ │ ├── server.js # Express server 
│ │ ├── /routes # API routes 
│ │ ├── /controllers # Business logic 
│ │ ├── /services # API services 
│── README.md


## 🪐 Frontend 

## Installation

To install the frontend, follow these steps:

1. Clone the repository to your local machine using `git clone`.
2. Navigate to the `frontend/mars-explorer` folder using `cd frontend/mars-explorer`.
3. Install the dependencies using `npm install`.
4. Start the development server using `npm start`.
5. The development server will start on port 3000, and you can access the application using `http://localhost:3000`.

Components
------------

The application consists of the following components:

* `App.js`: The main application component
* `Home.js`: The home page component
* `Rover.js`: The rover page component
* `RoverCard.js`: The rover card component
* `WeatherCard.js`: The weather card component
* `Navbar.js`: The navigation bar component
* `Background.js`: The background component
* `Hero.js`: The hero component

Services
---------

The application uses the following services:

* `api.js`: The API service
* `PhotosService.js`: The mars rovers photos service
* `WeatherService.js`: The weather service

Utilities
------------

The application uses the following utilities:

* `date_utils.js`: The date utility

Data
------

The application uses the following data:

* `rovers.json`: The rover data
* `cameras.json`: The camera types data
* `solRanges.json`: The sol range data

Environment Variables
------

The frontend uses the following environment variables:

* `REACT_APP_API_URL`: The URL of the backend API.



## 🛠️ Mars Rovers Backend

This is the backend for the Mars Rovers application, built using Node.js and Express.js.

## Installation

To install the backend, follow these steps:

1. Clone the repository to your local machine using `git clone`.
2. Navigate to the /backend/nasa-apis folder using `cd backend/nasa-apis`.
3. Install the dependencies using `npm install`.
4. Start the server using `npm start`.
5. The server will start on port 3000, and you can access the API endpoints using `http://localhost:3000`.

## API Endpoints

The backend provides the following API endpoints:

* `GET /mars-photos`: Retrieves a list of Mars photos from the NASA API.
* `GET /mars-weather`: Retrieves the current weather on Mars from the NASA API.

## Environment Variables

The backend uses the following environment variables:

* `NASA_API_KEY`: Your NASA API key.
* `REACT_APP_API_URL`: The URL of the backend API.

API Documentation
-----------------

The application uses the following APIs:

* NASA Mars Rover photos API: https://api.nasa.gov/mars-photos
* InSight: Mars Weather Service API: https://api.nasa.gov/insight_weather

📜 License
This project is open-source and available under the MIT License.

🚀 Made with ❤️ by YOUSFI Meriem Wafaê
---

### 📌 **What’s Included?**
✅ **Project description**  
✅ **Tech stack** (React, Node.js, Render)  
✅ **Deployment guide** (Frontend & Backend on Render)  
✅ **Setup instructions** (Running locally & environment variables)  
✅ **Common troubleshooting**  
✅ **License & Credits**  

Let me know if you want any changes! 🚀🔥

