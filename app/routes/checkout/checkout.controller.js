const BillingObject = require('../../../models/data-class/billing-class');

class BillingController {
    constructor(data) {
        this.data = data;
    }

    async createBilling(billingData, usernameId) {
        let thisBilling = null;
        try {
            thisBilling = new BillingObject(billingData.firstname,
                billingData.lastname, billingData.email, billingData.address,
                billingData.postalCode, billingData.city, billingData.country);

            const cityName = thisBilling.getCity();
            const countryName = thisBilling.getCountry();

            const city = await this.data.city.getByName(cityName);
            const country = await this.data.country.getByName(countryName);

            const result = await this.data
                .billings.addNewBilling(thisBilling,
                    country.id, city.id, usernameId);

            return result;
        } catch (err) {
            throw err;
        }
    }
}

module.exports = BillingController;
