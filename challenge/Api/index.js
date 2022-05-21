require('dotenv').config();
const App = require('./App');

const app = new App();

app.startServer(process.env.PORT || 3000);
