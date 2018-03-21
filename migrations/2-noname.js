'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "CitiesCountries", deps: [Cities, Countries]
 * changeColumn "date" on table "Events"
 * changeColumn "name" on table "Locations"
 *
 **/

var info = {
    "revision": 2,
    "name": "noname",
    "created": "2018-03-21T15:08:07.315Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "createTable",
        params: [
            "CitiesCountries",
            {
                "createdAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                },
                "CityId": {
                    "type": Sequelize.INTEGER,
                    "onUpdate": "CASCADE",
                    "onDelete": "CASCADE",
                    "references": {
                        "model": "Cities",
                        "key": "id"
                    },
                    "primaryKey": true
                },
                "CountryId": {
                    "type": Sequelize.INTEGER,
                    "onUpdate": "CASCADE",
                    "onDelete": "CASCADE",
                    "references": {
                        "model": "Countries",
                        "key": "id"
                    },
                    "primaryKey": true
                }
            },
            {}
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "Events",
            "date",
            {
                "type": Sequelize.DATE,
                "coverPhoto": {
                    "allowNull": true,
                    "validate": {
                        "isUrl": true
                    }
                },
                "validate": {
                    "isDate": true
                },
                "allowNull": true
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "Locations",
            "name",
            {
                "type": Sequelize.STRING,
                "address": {
                    "allowNull": true,
                    "validate": {
                        "len": [1, 500]
                    }
                },
                "validate": {
                    "len": [1, 100]
                },
                "allowNull": true
            }
        ]
    }
];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
