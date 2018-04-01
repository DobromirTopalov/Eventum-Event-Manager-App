const {
  Router,
} = require('express');
const BillingController = require('./checkout.controller');
const TicketController = require('../apis/check.ticket.amount.controller');

const init = (app, data) => { 
  const router = new Router();
  const billingController = new BillingController(data);  
  const ticketController = new TicketController(data);
  
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
    const eventId = billingData.order.EventId;
    const amount = billingData.order.amount;
    let product;

    console.log('******************');
    console.log(billingData.order);


    try {
      const eventInfo = await ticketController.getEventInfo(eventId);
      const ticketInfo = await ticketController.getTicketInfo(eventId);
      const ticketCapacity = ticketInfo.capacity;
      console.log(ticketCapacity);

      if ((ticketCapacity- amount) < 0 ) {
        throw new Error('All tickets were sold out!');
      } else {
        const newBilling = await billingController.createBilling(billingData, usernameId);
        await ticketController.createPurchesInfo(amount, usernameId, ticketInfo.id, newBilling.id);
        await ticketController.updateTicketCapacity(eventId, ticketCapacity - amount);
        product = {
          infoEvent: eventInfo,
          infoTicket: ticketInfo.dataValues,
          amount,
        };
      }

     } catch (err) {
         const someError = err;
         res.status(400).json({ 'err': err.message, 'data': product, });
     }
     res.status(200).json(product);
 })

  app.use('/', router);

}

module.exports = {
  init,
};