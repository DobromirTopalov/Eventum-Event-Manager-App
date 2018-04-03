class HomeController {
    constructor(data) {
        this.data = data;
    }

    async getAllCategories() {
        const result = await this.data.categories.getAllCategories();

        return result;
    }

    async getAllCountries() {
        const result = await this.data.country.getAll();

        return result;
    }
}

module.exports = HomeController;
