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

        return result;
    }

    getAllBillingsOfUser(userId) {
        const result = this.Model.findAll({
            include: [{
                model: User,
                where: {
                    id: userId,
                },
            }],
        });

        return result;
    }

    addNewBilling(billingObject, CountryId, CityId, UserId) {
        try {
            let seqError;
            this.Model.build({
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

module.exports = BillingsData;
