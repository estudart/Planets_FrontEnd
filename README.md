# Planets Frontend

![Solar System](https://github.com/estudart/Planets_FrontEnd/blob/main/solar_system.png)

## Description
This project showcases the frontend of a Solar System application built using React. It allows users to explore information about different planets in our solar system.

## Application Link
Explore the application [here](https://estudart.github.io/planets-react-frontend/).

## Repository Link
Find the code for this project on [GitHub](https://github.com/estudart/Planets_FrontEnd).

## Usage
To run this project locally, follow these steps:
1. Clone the repository:
   ```bash
   git clone https://github.com/estudart/Planets_FrontEnd.git
2. Install dependencies:
   ```bash
   npm install
3. Start the application:
   ```bash
   npm start
3. Access the application in your browser at http://localhost:3000

## Components

### App Component
The App component serves as the entry point for the application. It fetches data about planets from an external API and renders the main UI components.

### PlanetCard Component
The PlanetCard component displays detailed information about the selected planet, including its name, type, home star, mass, radius, and distance from the home star.

### MiniCards Component
The MiniCards component displays a list of mini cards for each planet. Clicking on a mini card updates the selected planet in the App component.

## API Endpoint
The frontend application consumes data from the following API endpoint:

- **Endpoint**: [https://estudart.pythonanywhere.com/planets](https://estudart.pythonanywhere.com/planets)
- **Method**: GET
- **Description**: Retrieve a list of planets.

## Contributors
Érico C. Studart - Software Developer
