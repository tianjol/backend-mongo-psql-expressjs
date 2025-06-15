{
    "name": "my-backend",
    "version": "1.0.0",
    "main": "index.js",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "description": "",
    "dependencies": {
        "cors": "^2.8.5", //untuk akses api dari front end berbeda
        "dotenv": "^16.5.0",
        "express": "^5.1.0",
        "mongoose": "^8.15.2",
        "pg": "^8.16.0",
        "pg-hstore": "^2.3.4", // postgri dari json
        "sequelize": "^6.37.7"
    },
    "devDependencies": {
        "nodemon": "^3.1.10"
    },
    "scripts": {
        "dev": "nodemon app.js",
        "start": "node app.js"
    }

}
