const {
    Subcategory
} = require('../../../models/database/models');

class Category {
    constructor(Model) {
        this.Model = Model;
    }

    getAllCategories() {
        const result = this.Model.findAll({
            attributes: ['Name'],
        });

        return result;
    }

    getAllSub(categories) {
        const result = this.Model.findAll({
            where: {
                name: categories,
            },
            include: [
                {
                    model: Subcategory,
                    attributes: ['title'],
                }
            ],
        });

        return result;
    }
}

module.exports = Category;