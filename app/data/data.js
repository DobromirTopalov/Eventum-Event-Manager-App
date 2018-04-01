// const Data = require('./main.data');
const {
    Category,
    Subcategory,
    Country,
    Ticket,
    UserPurches,
    City,
    Event,
    Location,
} = require('../../models/database/models');

const UsersData = require('./users.data');
const CategoriesData = require('./apis/categories.data');
const SubcategoryDate = require('./apis/subcategories.data');
const CountryData = require('./country.data');
const CityData = require('./city.data');
const BillingsData = require('./billing.data');
const TicketData = require('./apis/tickets.data');
const PurchesData = require('./apis/purches.data');

const EventData = require('./event.data');
const LocationData = require('./location.data');

module.exports = {
    users: new UsersData(),
    categories: new CategoriesData(Category),
    subcategories: new SubcategoryDate(Subcategory),
    country: new CountryData(Country),
    city: new CityData(City),
    events: new EventData(Event),
    billings: new BillingsData(),
    tickets: new TicketData(Ticket),
    purches: new PurchesData(UserPurches),
    location: new LocationData(Location),
};
