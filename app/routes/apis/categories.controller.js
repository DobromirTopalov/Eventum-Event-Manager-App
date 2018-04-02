class CategoriesApi {
    constructor(data) {
        this.data = data;
    }

    getAllCategories() {
        const result = this.data.categories.getAllCategories();

        return result;
    }

    getAllSub(categorie) {
        const result = this.data.categories.getAllSub(categorie);

        return result;
    }
}

module.exports = CategoriesApi;
