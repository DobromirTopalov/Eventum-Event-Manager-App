const billingObject = require('../../../models/data-class/billing-class');

class BillingController {
    constructor(data) {
        this.data = data;
    }

    async createBilling(billingData, usernameId) {
        let thisBilling = null;
        try {
            thisBilling = await new billingObject(billingData.firstname, billingData.lastname, billingData.email, billingData.address,
              billingData.postalCode, billingData.city, billingData.country);
            
            const cityName = thisBilling.getCity();
            const countryName = thisBilling.getCountry();

            const city = await this.data.city.getByName(cityName);
            const country = await this.data.country.getByName(countryName);
            
            await this.data.billings.addNewBilling(thisBilling, country.dataValues.id, city.dataValues.id, usernameId);

            // const allBillingsOfUserId = await this.data.billings.getAllBillingsOfUser(someID);
            // const result = allBillingsOfUserId.map((element) => element.dataValues);
            // console.log(result);

        }
        catch (err) {
            throw err;
        }
    }
}

module.exports = BillingController;
