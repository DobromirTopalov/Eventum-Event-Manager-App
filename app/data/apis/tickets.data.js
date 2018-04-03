class Tickets {
    constructor(Model) {
        this.Model = Model;
    }

    getAll() {
        const result = this.Model.findAll({
            attributes: ['id', 'price', 'capacity', 'EventId'],
        });

        return result;
    }

    getByEventId(eventId) {
        const result = this.Model.findOne({
            where: {
                EventId: eventId,
            },
        });

        return result;
    }

    async addNewTicket(ticketObject, EventId) {
        try {
            let seqError;
            await this.Model
                .build({
                    price: ticketObject.getPrice(),
                    capacity: ticketObject.getCapacity(),
                    EventId: EventId,
                })
                .save()
                .catch((err) => {
                    seqError = err;
                });
            if (seqError && seqError.name === 'SequelizeValidationError') {
                throw new Error('Unexpected error!');
            }
        } catch (err) {
            throw err;
        }
    }

    updateTicketInfo(id, ticketObject, price, cap, eventId) {
        try {
            let seqError;
            const result = this.Model.update({
                price: price,
                capacity: cap,
                EventId: eventId,
            }, {
                where: {
                    id: id,
                },
            }).catch((err) => {
                seqError = err;
            });
            return result;
        } catch (err) {
            throw err;
        }
    }

    updateCapacity(id, capacity) {
        const result = this.Model.update({
            capacity: capacity,
        }, {
            where: {
                id: id,
            },
        });

        return result;
    }
}

module.exports = Tickets;
