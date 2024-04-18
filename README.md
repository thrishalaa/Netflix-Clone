# Netflix Clone

This project is a simplified front end clone of Netflix. It was created with React and uses the TMDB (The Movie Database) API to search for movies and display details. This project is only intended for educational purposes.

Application Link - https://netflix-replica-27a5a.web.app/

## Features
* Sign up for a new account
* Sign in to an existing account
* Home Page with several movie categories
* View details of individual titles, including descriptions, genres and runtime
* Ability to play trailers
* Responsive design for various screen sizes

## Technologies Used
* React: Front end library for building user interfaces
* Axios: Promise based HTTP client for the browser and node.js
* Firebase: Platform developed by Google for creating mobile and web applications
* Movie Trailer: NPM package to fetch movie trailers
* React YouTube: A React component acting as a thin layer over the YouTube IFrame Player API

## Setup
To run this project, install it locally using npm:

![image](https://github.com/thrishalaa/netflix-clone/assets/147584982/a52e9b5c-0fe1-4cc8-854b-1bc2752bc428)


## Environmental Variables
To run this project, you will need to add the following environment variables to your .env file

REACT_APP_API_KEY - Your TMDB API key for fetching movie details

## API Reference

The Netflix clone utilizes the TMDB (The Movie Database) API to fetch movie details, images, and trailers. Below is a brief overview of the API endpoints used in the project.

### Base URL

All API requests are made to the following base URL:
https://api.themoviedb.org/3/

### Authentication

Requests to TMDB require an API key. Include your API key in all requests:
?api_key=your_api_key

## Available Scripts
In the project directory, you can run:

### 'npm start'
Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

### 'npm test'
Launches the test runner in the interactive watch mode.

### 'npm run build'
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

## Project Structure
* 'src': This folder is the main container of all the code inside your application.
* 'components': All the presentational components.
* 'config': Application configuration including environment-specific configs.
* 'services': All the business logic.
* 'hooks': Custom React hooks.
* 'utils': Utility classes and functions.
* 'views': React components that represent pages.

## App Preview

Below are some screenshots from the Netflix Clone, showcasing various features and the user interface

### Signup Screen

The Signup Screen is the entry point to the Netflix clone, where users can either sign in to their existing account or register for a new one. It is designed to be user-friendly and straightforward, ensuring a seamless onboarding experience.

![Screenshot 2024-04-16 112502](https://github.com/thrishalaa/netflix-clone/assets/147584982/b510a762-97c4-4c87-ae18-a624bd71fd8c)



### Login Screen

The login screen provides users with a simple and secure login interface. Users can enter their credentials to access their personalized streaming dashboard.

![Screenshot 2024-04-16 112530](https://github.com/thrishalaa/netflix-clone/assets/147584982/52856b00-979e-4cf2-a5fd-3c68a4f1c96c)


### Home Screen

The Home screen provides the main interface displaying trending movies and categories.

![Screenshot 2024-04-16 112650](https://github.com/thrishalaa/netflix-clone/assets/147584982/fd1f7a70-a1f3-4a14-b591-3912818349eb)


![Screenshot 2024-04-16 112858](https://github.com/thrishalaa/netflix-clone/assets/147584982/0e15d4d0-6143-4ca2-b41a-39e1e14fd06a)


![Screenshot 2024-04-18 191806](https://github.com/thrishalaa/Netflix-Clone/assets/147584982/7c5200d1-6a45-4e26-9e2b-d8a412520e55)


![Screenshot 2024-04-18 191903](https://github.com/thrishalaa/Netflix-Clone/assets/147584982/a89a8e0d-ef23-44dd-9d45-c68cc6ad1100)



### Profile Screen

The Profile Screen displays user-specific data. Users can view their current plan and upgrade or downgrade their subscription. It allows users to log out of the application using SignOut button.

![Screenshot 2024-04-16 112934](https://github.com/thrishalaa/netflix-clone/assets/147584982/592b1af9-b2b2-4b12-83b7-b1b43ce9376c)


### Watch Trailer 

A view of the trailer playing functionality.

![Screenshot 2024-04-16 112827](https://github.com/thrishalaa/netflix-clone/assets/147584982/a11b57a4-a06b-4520-a83a-cb9b7d8cffd1)


## Future Scope

The Netflix Clone is continuously evolving, and there are several enhancements planned for future releases that aim to enrich user experience and expand functionality:

* User Profiles: Introduction of personalized user profiles allowing multiple users to access the app with personalized settings and content.
* Advanced Recommendation System: Implement a machine learning-based recommendation system to suggest movies and shows based on user preferences and viewing history.
* Offline Viewing: Allow users to download movies and shows to watch offline.
* Multi-Language Support: Add support for multiple languages for the app interface as well as for the content subtitles.
* Parental Controls: Implement parental control settings to restrict content based on age ratings.

These features are aimed at making the Netflix Clone more robust, user-friendly, and accessible to a broader audience.

## Known Bugs

Transparency about issues is crucial for building a reliable software solution. Here are some known issues that are currently being addressed:

* Trailer Playback Issues: Some users have reported that movie trailers do not always load correctly. This issue is often related to API limitations or data mismatches.
* Responsive Design Glitches: Some responsive design inconsistencies on tablets and mobile devices affect usability.
* Slow Load Times: Increased load times have been observed for movie lists and detail views, particularly when fetching large datasets.


## License
Distributed under the MIT License. See LICENSE for more information.

## Acknowledgements
* TMDB for providing the API to fetch movie information
* Icons and images are sourced from various libraries and stock photo websites
