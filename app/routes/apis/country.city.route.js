const {
  Router,
} = require('express');

const CountryCityController = require('./country.city.controller');

const init = (app, data) => {
  const router = new Router();
  const controller = new CountryCityController(data);

  router
    .get('/countries', async (req, res) => {
      const result = await controller.getAllCountries();

      res.status(200).json(result);
    })
    .get('/cities', async (req, res) => {
      const country = req.query.country;
      const result = await controller.getAllCities(country);

      if (result.length === 0) {
        return res.status(200).json({info: false});
      }

      res.status(200).json(result);
    });

  app.use('/', router);
};

module.exports = {
  init,
};
