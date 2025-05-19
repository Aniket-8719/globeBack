const express = require('express');
const cors = require('cors');
// const bodyParser = require('body-parser');

class App {
  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(express.urlencoded({ extended: true }));
  }
 
  useRoutes(routeManager) {
    this.app.use('/api/users', routeManager);
  }

  start() {
    const PORT = process.env.PORT || 5000;
    this.app.listen(PORT, () => {
      console.log(`Server running on port http://localhost:${PORT}`);
    });
  }

  static makeExpressCallback(controller){
    return (req, res) => {
      const httpRequest = {
        body: req.body,
        query: req.query,
        params: req.params,
        ip: req.ip,
        method: req.method,
        path: req.path,
        headers: {
          'Content-Type': req.get('Content-Type'),
          Referer: req.get('referer'),
          'User-Agent': req.get('User-Agent')
        }
      };

      controller(httpRequest)
        .then(httpResponse => {
          if (httpResponse.headers) {
            res.set(httpResponse.headers);
          }
          res.type('json');
          res.status(httpResponse.statusCode).send(httpResponse.body);
        })
        .catch(e => res.status(500).send({ error: 'An unknown error occurred.' }));
    }
  }
}

module.exports = App;

