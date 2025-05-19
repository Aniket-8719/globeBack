const App = require('./routing-helper/app');
const userRoutes = require('./routes/user.routes');

class Routes extends App {
  constructor() {
    super();
    this.useRoutes(userRoutes);
  }

  startServing() {
    return this.start();
  }
}

module.exports = Routes;
