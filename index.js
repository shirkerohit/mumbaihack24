import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes.js'; // Import the routes

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json()); // Parse JSON request bodies

app.use('/api', routes); // Prefix all routes with /api

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
