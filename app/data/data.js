// const Data = require('./main.data');
const {
    Category,
    Subcategory,
    Country,
    City,
} = require('../../models/database/models');

const UsersData = require('./users.data');
const CategoriesData = require('./apis/categories.data');
const SubcategoryDate = require('./apis/subcategories.data');
const CountryData = require('./country.data');
const CityData = require('./city.data');
const EventData = require('./event.data');

module.exports = {
    users: new UsersData(),
    categories: new CategoriesData(Category),
    subcategories: new SubcategoryDate(Subcategory),
    country: new CountryData(Country),
    city: new CityData(City),
    events: new EventData(),
};
