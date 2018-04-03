const {
    Event,
    Location,
    City,
    Country,
    Category,
    Subcategory,
    User,
    UserInfo,
} = require('../../../models/database/models');

class Purches {
  constructor(Model) {
      this.Model = Model;
  }

  getAll() {
      const result = this.Model.findAll({
          attributes: ['id', 'quantity', 'UserId', 'TicketId', 'BillingInfoId'],
      });

      return result;
  }

  getByUserId(userId) {
      const result = this.Model.findOne({
          where: {
              UserId: userId,
          },
      });

      return result;
  }

  getAllByUser(id) {
    const result = this.Model.findAll({
        where: {
            UserId: id,
        },
        include: {
            model: Event,
        },
    });

    return result;
  }

  getAllByUserFullEvent(id) {
    const result = this.Model.findAll({
        where: {
            UserId: id,
        },
        include: {
            model: Event,
            include: [
                {
                    model: Location,
                    include: [
                        {
                            model: City,
                            include: {
                                model: Country,
                            },
                        },
                    ],
                },
                {
                    model: User,
                    include: {
                        model: UserInfo,
                    },
                },
                {
                    model: Category,
                },
                {
                    model: Subcategory,
                },
            ],
        },
    });

    return result;
  }

  async addNewPurches(quantity, UserId, EventId, TicketId, BillingInfoId) {
      try {
          let seqError;
          await this.Model
              .build({
                  quantity: quantity,
                  UserId: UserId,
                  EventId: EventId,
                  TicketId: TicketId,
                  BillingInfoId: BillingInfoId,
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
}

module.exports = Purches;
