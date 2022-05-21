require('dotenv').config();
const App = require('./App');
const CustomRouter = require('./routes/CustomRouter');
const Service = require('./services/Service');
const Controller = require('./controllers/Controller');

const app = new App();
const controller = new Controller(Service);
const customRouter = new CustomRouter(controller);

app.addRouter(customRouter.router);
app.startServer(process.env.PORT || 3000);
