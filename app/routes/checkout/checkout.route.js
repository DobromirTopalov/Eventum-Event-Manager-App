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
      const userID = req.user.id;

      const countries = ['Bulgaria', 'Malta', 'Denmark'];
      const cities = ['Sofia', 'Berlin', 'Moscow'];
      const context = {
        countries,
        cities,
      };

      return res.render('./checkout/checkout', context);
    })
    .post('/checkout', async (req, res, next) => {
      const usernameId = req.user.id;

      const billingData = req.body;
      const eventId = billingData.order.eventId;
      const amount = billingData.order.amount;
      let product;

      try {
        const eventInfo = await ticketController.getEventInfo(eventId);
        if (eventInfo === null) {
          throw new Error('There is no such a event!');
        }

        const ticketInfo = await ticketController.getTicketInfo(eventId);
        if (ticketInfo === null) {
          throw new Error('This is no such a ticket!');
        }

        const ticketCapacity = ticketInfo.capacity;
        if (ticketCapacity - amount < 0) {
          throw new Error('All tickets were sold out!');
        }

        const newBilling = await billingController
          .createBilling(billingData, usernameId);

        await ticketController
          .createPurchesInfo(amount, usernameId, eventInfo.id,
            ticketInfo.id, newBilling.id);

        await ticketController
          .updateTicketCapacity(ticketInfo.id, ticketCapacity - amount);

        product = {
          infoEvent: eventInfo,
          infoTicket: ticketInfo.dataValues,
          amount,
        };
      } catch (err) {
        res.status(400).json({ 'err': err.message, 'data': product });
      }

      res.status(200).json(product);
    });

  app.use('/', router);
};

module.exports = {
  init,
};
