const {
  Router,
} = require('express');
const BillingController = require('./checkout.controller');

const init = (app, data) => { 
  const router = new Router();
  const billingController = new BillingController(data);
  
  router
  .get('/checkout', async (req, res) => {
    if (!req.user) {
      return res.redirect('/login');
    }
    let userID = await req.user.id;
    
    const countries = ['Bulgaria', 'Malta', 'Denmark'];
    const cities = ['Sofia', 'Berlin', 'Moscow'];
    const context = {
      countries,
      cities,
    };
    res.render('./checkout/checkout', context);
  })
  .post('/checkout', async (req, res, next) => {
    let usernameId = await req.user.id;
    
    const billingData = req.body;
    
    try {
         await billingController.createBilling(billingData, usernameId);
     } catch (err) {
         const someError = err;
         res.status(400).json({ 'err': err.message });
     }
     res.status(200).json({ 'success': true });
 })

  app.use('/', router);

}

module.exports = {
  init,
};