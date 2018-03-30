// const Data = require('./main.data');
const {
    Category,
    Country,
    City,
} = require('../../models/database/models');

const UsersData = require('./users.data');
const CategoriesData = require('./apis/categories.data');
const CountryData = require('./country.data');
const CityData = require('./city.data');

module.exports = {
    users: new UsersData(),
    categories: new CategoriesData(Category),
    country: new CountryData(Country),
    city: new CityData(City),
};
