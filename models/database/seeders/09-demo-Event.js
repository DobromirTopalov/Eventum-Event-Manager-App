'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Events', [{
        title: 'Dance under the sky',
        describe: `ADE's festival program covers the whole spectrum of electronic subgenres, with over 2,500 artists performing in 140 of Amsterdam's finest music and nightlife spaces. In 2017 the festival attracted 395,000 festival visitors from over 90 countries, which makes it the world's biggest club festival. `,
        capacity: 350,
        coverPhoto: 'under the sky.jpg',
        date: new Date('July 21, 2018 01:15:00'),
        LocationId: 1,
        UserId: 1,
        CategoryId: 1,
        SubcategoryId: 9,
      }, {
        title: 'Classicco - feel the class, enjoy the sound!',
        describe: `France's classical circuit is—no joke—one of the most artistically diverse local scenes going. On a given weekend in town, you can check out grand European opera hits, edgy contemporary pieces, and one-off collaborations between electronic artists, indie darlings and recent conservatory grads. In addition to festivals like The New York Philharmonic Biennial, we have venues for every occasion, from the opulent Carnegie Hall to underground hot spot Le Poisson Rouge. And there are good deals to be had too, when you consider the free concerts, student-rush deals and the come-as-you-are ethos of several venues located downtown (and in Brooklyn). Here's where to find classical performances this week.`,
        capacity: 200,
        coverPhoto: 'classical.jpg',
        date: new Date('December 25, 2018 21:00:00'),
        LocationId: 2,
        UserId: 8,
        CategoryId: 2,
        SubcategoryId: 17,
      }, {
        title: 'Sport with celebrities!',
        describe: `Skill, speed, and stamina are the three s’s that mark the world’s best automobile race, the 24 Hours of Le Mans. The race, organized by Automobile Club de L’Ouest, bridges past and present on the automotive circuit.The competition is set on a non-permanent track at Circuit de la Sarthe near the city of Le Mans on the Sarthe River. Roughly 46 cars start the race, in a series of classes that include prototype high-performance vehicles, dedicated race cars, and street cars. The diversity of autos gives the race a mix of old-fashioned and modern competitors. The winner is the car, driven by a team of three drivers, that covers the greatest distance in 24 hours.The first Le Mans contest took place in May 1923; today it is held every June. The race begins at 4 p.m., and for 24 hours the sound of roaring engines fills 8 miles (13 kilometers) of French countryside.`,
        capacity: 80,
        coverPhoto: 'sport.jpg',
        date: new Date('August 8, 2018 17:45:00'),
        LocationId: 3,
        UserId: 5,
        CategoryId: 5,
        SubcategoryId: 66,
      }, {
        title: 'Tournament DOTA2/League of Legends/GO',
        describe: `GESC Dota 2 Pro Circuit Tournament is the first Valve Corporation sanctioned tournament in Indonesia and will feature the world’s best teams and an Indonesia representative who will compete for the largest prize purse in the country – USD300,000 and qualifying points to The International 2018. The tournament concluded with Evil Geniuses taking home the trophy of GESC Indonesia Dota 2 Minor.`,
        capacity: 80,
        coverPhoto: `dota.jpg`,
        date: new Date('September 17, 2018 06:45:00'),
        LocationId: 4,
        UserId: 8,
        CategoryId: 8,
        SubcategoryId: 90,
      }, {
        title: 'Art masterpieces from all over the world!',
        describe: `Happening, event that combined elements of painting, poetry, music, dance, and theatre and staged them as a live action. The term Happening was coined by the American artist Allan Kaprow in the 1950s. The nature of Happenings was influenced by Italian Futurist performance, where the convention of “proscenium architecture” was assaulted, where the “actors” could consist of moving lights, machinery, and the audience, and where simultaneity and noise-music were developed. Happenings were also influenced by Dada’s chance-derived assembly of found objects and events and by gestural painting, which was increasingly recognized as an event, as seen in Jackson Pollock’s drip-painting technique—free-associative gestures he made while dripping, splattering, and pouring paint on canvases placed on the ground.`,
        capacity: 180,
        coverPhoto: `art.jpg`,
        date: new Date('July 3, 2018 14:30:00'),
        LocationId: 5,
        UserId: 12,
        CategoryId: 3,
        SubcategoryId: 41,
      }, {
        title: 'Educate it! Talk about learn fast techniques.',
        describe: `Learning Technologies, incorporating Learning & Skills, is Europe's leading showcase of organisational learning and the technology used to support learning at work. And it continues to grow in importance, value and attendance year on year.With more than 8,000 visitors, 150 free L&D seminars, over 200 exhibitors, two exhibition halls packed with the latest learning technologies, innovation and best practice and the industry's leading L&D conference, it provided a unique and exciting environment for all those involved in workplace learning.In 2019, the show moves to its new home, Excel London where there will be even more to see and do at the biggest show in the entire learning sector. It’s also the best attended and fastest growing!`,
        capacity: 100,
        coverPhoto: `educate.jpg`,
        date: new Date('April 30, 2018 20:30:00'),
        LocationId: 6,
        UserId: 13,
        CategoryId: 9,
        SubcategoryId: 95,
      }].map( (el) => {
        el.updatedAt = new Date;
        el.createdAt = new Date;
        return el;
      }), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Events', null, {});
  },
};
