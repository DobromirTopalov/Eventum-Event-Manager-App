const Data = require('./main.data');

const {
    BillingInfo,
    User,
} = require('../../models/database/models');

class BillingsData extends Data {
    constructor() {
        super(BillingInfo);
    }

    findById(id) {
        const result = this.Model.findOne({
            where: {
                id: id,
            },
        });
    }

    getAllBillingsOfUser(userId) {
        const result = this.Model.findAll({
            include: [{
                model: User,
                where: {
                    id: userId,
                }
            }, ],
        });

        return result;
    }


    async addNewBilling(billingObject, CountryId, CityId, UserId) {
        try {
            let seqError;
            await this.Model
                .build({
                    firstName: billingObject.getFirstName(),
                    lastName: billingObject.getLastName(),
                    email: billingObject.getEmail(),
                    address: billingObject.getAddress(),
                    postCode: billingObject.getPostCode(),
                    CountryId: CountryId,
                    CityId: CityId,
                    UserId: UserId,
                })
                .save()
                .catch(err => {
                    seqError = err; //sequelize error handling issue with save
                });
            if (seqError && seqError.name === 'SequelizeValidationError') {
                throw new Error('Unexpected error!')
            }
        } catch (err) {
            throw err;
        }
    }

}

module.exports = BillingsData;