const {
  Router,
} = require('express');

const TicketController = require('./check.ticket.amount.controller');

const init = (app, data) => {
  const router = new Router();
  const controller = new TicketController(data);

  router
    .get('/checkTicketsAmount', async (req, res, next) => {
      const eventId = req.query.EventId;
      const amount = req.query.amount;

      let product;

      if (!req.user) {
          return res.redirect('/login');
      }

      try {
        const eventInfo = await controller.getEventInfo(eventId);
        const ticketInfo = await controller.getTicketInfo(eventId);

        const ticketCapacity = ticketInfo.dataValues.capacity;

        if ( !((ticketCapacity - amount) > -1) ) {
          throw new Error('All tickets were sold out!');
        } else {
          product = {
            infoEvent: eventInfo,
            infoTicket: ticketInfo.dataValues,
            amount,
          };
        }
      } catch (err) {
          const someError = err;
          res.status(400).json({ 'err': err.message });
      }
      res.status(200).json(product);
    });

  app.use('/event', router);
};

module.exports = {
  init,
};
