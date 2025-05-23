const { computeHeadingLevel } = require('@testing-library/react');
const swaggerJSDoc = require('swagger-jsdoc');
const { schema } = require('../models/event');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'SummitGrid API',
            version: '1.0.0',
            description: 'API documentation for the SummitGrid application',
        },
        components : {
            schemas: {
                Event: {}
            }
        },
        servers: [
            {
                url: 'http://localhost:3000/api',
            },
        ],
    },
    apis: ['./routes/*.js'],
}

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;