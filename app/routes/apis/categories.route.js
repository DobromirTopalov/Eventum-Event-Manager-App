const {
  Router,
} = require('express');

const Category = require('./categories.controller');

const init = (app, data) => {
  const router = new Router();
  const controller = new Category(data);

  router
    .get('/categories', async (req, res) => {
      const result = await controller.getAllCategories();

      res.status(200).json(result);
    })
    .get('/subCategories', async (req, res) => {
      const reqCategorie = req.query.categorie;
      const result = await controller.getAllSub(reqCategorie);

      if (result.length === 0) {
        return res.status(200).json({info: false});
      }

      res.status(200).json(result[0].Subcategories);
    });

  app.use('/', router);
};

module.exports = {
  init,
};
