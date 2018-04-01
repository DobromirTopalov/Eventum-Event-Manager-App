class TicketAmountController {
  constructor (data) {
      this.data = data;
  }

  async getEventInfo(eventId) {
    const result = await this.data.events.findById(eventId);
    
    return result;
  }

  async getTicketInfo(eventId) {
    const result = await this.data.tickets.getByEventId(eventId);
    
    return result;
  }

  async createPurchesInfo(quantity, UserId, TicketId, BillingInfoId) {
    const result = await this.data.purches.addNewPurches(quantity, UserId, TicketId, BillingInfoId);
    return result;
  }

  async updateTicketCapacity(eventId, capacity) {
    const ticket = await this.data.tickets.getByEventId(eventId);
    const result = await this.data.tickets.updateCapacity(ticket.id, capacity);

    return result;
  }
}

module.exports = TicketAmountController;