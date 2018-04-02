'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Subcategories', [{
      title: 'Popping',
      CategoryId: 1,
    }, {
      title: 'Tango',
      CategoryId: 1,
    }, {
      title: 'Street dance',
      CategoryId: 1,
    }, {
      title: 'Cha Cha',
      CategoryId: 1,
    }, {
      title: 'Lambada',
      CategoryId: 1,
    }, {
      title: 'Salsa',
      CategoryId: 1,
    }, {
      title: 'Zumba',
      CategoryId: 1,
    }, {
      title: 'Swing',
      CategoryId: 1,
    }, {
      title: 'Electro dance',
      CategoryId: 1,
    }, {
      title: 'Hustle dance',
      CategoryId: 1,
    }, {
      title: 'Pogo',
      CategoryId: 1,
    }, {
      title: 'Folk',
      CategoryId: 1,
    }, {
      title: 'Belly dance',
      CategoryId: 1,
    }, {
      title: 'Hip hop dance',
      CategoryId: 1,
    }, {
      title: 'Twist',
      CategoryId: 1,
    }, {
      title: 'Blues',
      CategoryId: 2,
    }, {
      title: 'Classical music',
      CategoryId: 2,
    }, {
      title: 'Country music',
      CategoryId: 2,
    }, {
      title: 'Electronic music',
      CategoryId: 2,
    }, {
      title: 'Indie',
      CategoryId: 2,
    }, {
      title: 'Hip-hop',
      CategoryId: 2,
    }, {
      title: 'Jazz',
      CategoryId: 2,
    }, {
      title: 'Latin music',
      CategoryId: 2,
    }, {
      title: 'Opera',
      CategoryId: 2,
    }, {
      title: 'R&B',
      CategoryId: 2,
    }, {
      title: 'Reggae',
      CategoryId: 2,
    }, {
      title: 'Rock',
      CategoryId: 2,
    }, {
      title: 'Pop',
      CategoryId: 2,
    }, {
      title: 'Rock \'n roll',
      CategoryId: 2,
    }, {
      title: 'Chill',
      CategoryId: 2,
    }, {
      title: 'House',
      CategoryId: 2,
    }, {
      title: 'Techno',
      CategoryId: 2,
    }, {
      title: 'Vibes',
      CategoryId: 2,
    }, {
      title: 'Abstract',
      CategoryId: 3,
    }, {
      title: 'Advertisement',
      CategoryId: 3,
    }, {
      title: 'Animal painting',
      CategoryId: 3,
    }, {
      title: 'Calligraphy',
      CategoryId: 3,
    }, {
      title: 'Cityscape',
      CategoryId: 3,
    }, {
      title: 'Design',
      CategoryId: 3,
    }, {
      title: 'Flower painting',
      CategoryId: 3,
    }, {
      title: 'Graffiti',
      CategoryId: 3,
    }, {
      title: 'Miniature',
      CategoryId: 3,
    }, {
      title: 'Mosaic',
      CategoryId: 3,
    }, {
      title: 'Nude painting',
      CategoryId: 3,
    }, {
      title: 'Sculpture',
      CategoryId: 3,
    }, {
      title: 'Shan Shui',
      CategoryId: 3,
    }, {
      title: 'Self-Portrait',
      CategoryId: 3,
    }, {
      title: 'Sketch',
      CategoryId: 3,
    }, {
      title: 'Photo painting',
      CategoryId: 3,
    }, {
      title: 'Architecture',
      CategoryId: 3,
    }, {
      title: 'Animation',
      CategoryId: 3,
    }, {
      title: 'Urushi-e',
      CategoryId: 3,
    }, {
      title: 'Indian',
      CategoryId: 4,
    }, {
      title: 'Chinese',
      CategoryId: 4,
    }, {
      title: 'Bulgarian',
      CategoryId: 4,
    }, {
      title: 'Traditional',
      CategoryId: 4,
    }, {
      title: 'Modern',
      CategoryId: 4,
    }, {
      title: 'Western',
      CategoryId: 4,
    }, {
      title: 'Eastern',
      CategoryId: 4,
    }, {
      title: 'Classical',
      CategoryId: 4,
    }, {
      title: 'Ancient',
      CategoryId: 4,
    }, {
      title: 'Tennis',
      CategoryId: 5,
    }, {
      title: 'Volleball',
      CategoryId: 5,
    }, {
      title: 'Football',
      CategoryId: 5,
    }, {
      title: 'Rugby',
      CategoryId: 5,
    }, {
      title: 'Golf',
      CategoryId: 5,
    }, {
      title: 'Ski',
      CategoryId: 5,
    }, {
      title: 'Athletics',
      CategoryId: 5,
    }, {
      title: 'Fitness',
      CategoryId: 5,
    }, {
      title: 'Fighting',
      CategoryId: 5,
    }, {
      title: 'Rock climbing',
      CategoryId: 5,
    }, {
      title: 'Sky diving',
      CategoryId: 5,
    }, {
      title: 'Hardware',
      CategoryId: 6,
    }, {
      title: 'Software',
      CategoryId: 6,
    }, {
      title: 'AI',
      CategoryId: 6,
    }, {
      title: 'Cameras',
      CategoryId: 6,
    }, {
      title: 'Television',
      CategoryId: 6,
    }, {
      title: 'Phones',
      CategoryId: 6,
    }, {
      title: 'Gadgets',
      CategoryId: 6,
    }, {
      title: 'PC & Laptops',
      CategoryId: 6,
    }, {
      title: 'Future',
      CategoryId: 6,
    }, {
      title: 'Retro',
      CategoryId: 6,
    }, {
      title: 'Clothing',
      CategoryId: 7,
    }, {
      title: 'Music',
      CategoryId: 7,
    }, {
      title: 'Craftsmanship',
      CategoryId: 7,
    }, {
      title: 'Festivals & Traditions',
      CategoryId: 7,
    }, {
      title: 'Tournaments',
      CategoryId: 8,
    }, {
      title: 'Reviews',
      CategoryId: 8,
    }, {
      title: 'Streams',
      CategoryId: 8,
    }, {
      title: 'Releases and Promotions',
      CategoryId: 8,
    }, {
      title: 'Mathematics',
      CategoryId: 9,
    }, {
      title: 'Programming',
      CategoryId: 9,
    }, {
      title: 'Languages',
      CategoryId: 9,
    }, {
      title: 'Lifestyle',
      CategoryId: 9,
    }, {
      title: 'Ethics',
      CategoryId: 9,
    }, {
      title: 'Behaviour and manners',
      CategoryId: 9,
    }, {
      title: 'Dancing',
      CategoryId: 9,
    }, {
      title: 'Singing',
      CategoryId: 9,
    }, {
      title: 'Healthcare',
      CategoryId: 9,
    }, {
      title: 'Problem solving',
      CategoryId: 9,
    }, {
      title: 'AI',
      CategoryId: 10,
    }, {
      title: 'Astronomy',
      CategoryId: 10,
    }, {
      title: 'Physics',
      CategoryId: 10,
    }, {
      title: 'Mathematics',
      CategoryId: 10,
    }, {
      title: 'Theories',
      CategoryId: 10,
    }, {
      title: 'Sci-fi',
      CategoryId: 10,
    }, {
      title: 'Electronics',
      CategoryId: 10,
    }, {
      title: 'Healthcare',
      CategoryId: 10,
    }, {
      title: 'Medicine',
      CategoryId: 10,
    }, {
      title: 'Gardening',
      CategoryId: 11,
    }, {
      title: 'Beekeeping',
      CategoryId: 11,
    }, {
      title: 'Botanics',
      CategoryId: 11,
    }, {
      title: 'Flower caring',
      CategoryId: 11,
    }, {
      title: 'Fruit caring',
      CategoryId: 11,
    }, {
      title: 'Vegetables',
      CategoryId: 11,
    }, {
      title: 'Pestkilling',
      CategoryId: 11,
    }, {
      title: 'Wood work',
      CategoryId: 12,
    }, {
      title: 'Metal bending',
      CategoryId: 12,
    }, {
      title: 'Sewing',
      CategoryId: 12,
    }, {
      title: 'Origami',
      CategoryId: 12,
    }, {
      title: 'Weapon making',
      CategoryId: 12,
    }, {
      title: 'Smithing',
      CategoryId: 12,
    }, {
      title: 'Leatherworking',
      CategoryId: 12,
    }, {
      title: 'Retro',
      CategoryId: 13,
    }, {
      title: 'Post Modern',
      CategoryId: 13,
    }, {
      title: 'Vintage',
      CategoryId: 13,
    }, {
      title: 'Celebrity',
      CategoryId: 13,
    }, {
      title: 'Street style',
      CategoryId: 13,
    }, {
      title: 'Casual',
      CategoryId: 13,
    }, {
      title: 'Junkie',
      CategoryId: 13,
    }, {
      title: 'Rocky',
      CategoryId: 13,
    }, {
      title: 'Birthday',
      CategoryId: 14,
    }, {
      title: 'Nameday',
      CategoryId: 14,
    }, {
      title: 'Prom',
      CategoryId: 14,
    }, {
      title: 'Big deal',
      CategoryId: 14,
    }, {
      title: 'Pool',
      CategoryId: 14,
    }, {
      title: 'Summer',
      CategoryId: 14,
    }, {
      title: 'Breakup',
      CategoryId: 14,
    }].map((el) => {
      el.updatedAt = new Date;
      el.createdAt = new Date;
      return el;
    }), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Subcategories', null, {});
  },
};
