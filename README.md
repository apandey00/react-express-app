## Getting Started

In the root directory of the project...

1. Install node modules `yarn install` or `npm install`.
2. Start development server `yarn start` or `npm start`.

## Next Steps

### Sample Data

Replace the sample data stored in /server/sampleData.js.
Replace the default images stored in /src/images.

### Adding a New Page

1. Create a folder in `/src/components` with your react components.
2. Add a route for your page to `/src/App.js`.
3. Add a button to the navigation bar in `/src/components/NavBar/index.js`.

## File Structure

The front-end is based on [create-react-app](https://github.com/facebook/create-react-app).

The back-end is based on [Express Generator](https://expressjs.com/en/starter/generator.html).

The front-end is served on http://localhost:3000/ and the back-end on http://localhost:3001/.

```
.
├── server/ - Express server that provides API routes and serves front-end
│ ├── sampleData.js - Contains all sample text data for generate pages
│ └── server.js - Configures Port, express server and routes
├── src - React front-end
│ ├── components - React components for each page
│ ├── App.jsx - React routing
│ └── index.jsx - React root component
└── README.md
```

## Additional Documentation

- React - https://reactjs.org/
- React Router - https://reacttraining.com/react-router/

- Bootstrap CSS - https://getbootstrap.com/
- Express - https://expressjs.com/

<!-- This project was created using [Microsoft Web Template Studio](https://github.com/Microsoft/WebTemplateStudio). -->
