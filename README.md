# Calculator
A simple web-based calculator built using **HTML**, **CSS**, and **TypeScript**. The project uses Parcel as the bundler for development and production builds.

## Features
* Basic arithmetic operations: addition, subtraction, multiplication, and division.
* Clear (C), backspace, and decimal point functionalities.
* Responsive display for showing the current input, operation, and previous result.

## Technologies Used
* HTML: Structure of the application.
* CSS: Styling the calculator's layout.
* TypeScript: Logic for handling calculations and interactions.
* Parcel: Bundler for building and serving the app in development.

## Getting Started
### Prerequisites
Make sure you have Node.js installed on your machine. You can download it from here.

### Installation
1. Clone the repository.
   ``` bash
   git clone https://github.com/opaque-maniac/calculator.git
   ```

2. Navigate to the project directory.
   ``` bash
   cd calculator
   ```
3. Install dependencies.
   ``` bash
   npm install
   ```

### Running the app in development
To run the calculator in development mode with live reloading, use the following command:
   ``` bash
   npm run start
   ```
The app will run on [localhost](http://localhost:1234)

### Building the app for production
To buld the app and transpile the typescript for production, use the following command:
   ``` bash
   npm run start
   ```
The build code will be in the __dist__ folder.

## Project Structure
```
calculator/
│
├── dist/                # Compiled production files (generated after build)
│
├── src/                 # Source code
│   ├── scripts/         # TypeScript logic
│   │   └── index.ts     # Main TypeScript file
│   ├── styles/          # CSS files
│   │   └── styles.css   # Main CSS file
│   └── index.html       # Main HTML file
│
├── package.json         # Project configuration and dependencies
├── tsconfig.json        # TypeScript configuration
├── .gitignore           # Git ignore file
└── README.md            # Project README file
```
