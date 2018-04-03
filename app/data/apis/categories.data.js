const {
    Subcategory,
} = require('../../../models/database/models');

class Category {
    constructor(Model) {
        this.Model = Model;
    }

    getAllCategories() {
        const result = this.Model.findAll({
            attributes: ['name'],
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
                },
            ],
        });

        return result;
    }

    getByName(category) {
        const result = this.Model.findOne({
            where: {
                name: category,
            },
        });

        return result;
    }
}

module.exports = Category;
