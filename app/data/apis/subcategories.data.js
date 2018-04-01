class Subcategory {
    constructor(Model) {
        this.Model = Model;
    }

    getAll() {
        const result = this.Model.findAll({
            attributes: ['title'],
        });

        return result;
    }

    getByName(subcategory) {
        const result = this.Model.findOne({
            where: {
                title: subcategory
            }
        });

        return result;
    }
}

module.exports = Subcategory;
