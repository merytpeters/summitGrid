require('dotenv').config(); // load env variables at the very top

const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./docs/swagger');
const eventRoutes = require('./routes/event');
const connectDB = require('./config/db');

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(express.json());
app.use('/api/events', eventRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the SummitGrid API');
});

app.get('/api', (req, res) => {
  res.send('API is running');
});

app.get('/api/events', (req, res) => {
  res.send('Events API is running');
});

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
  });
}).catch((err) => {
  console.error('Database connection error:', err);
  process.exit(1);
});
