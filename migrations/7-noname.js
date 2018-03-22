'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * addColumn "content" to table "Descriptions"
 * addColumn "coverPhoto" to table "Events"
 * changeColumn "title" on table "Descriptions"
 * changeColumn "date" on table "Events"
 * changeColumn "CityId" on table "LocationsCities"
 * changeColumn "LocationId" on table "LocationsCities"
 *
 **/

var info = {
    "revision": 7,
    "name": "noname",
    "created": "2018-03-22T09:56:08.518Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "addColumn",
        params: [
            "Descriptions",
            "content",
            {
                "type": Sequelize.TEXT,
                "allowNull": true
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "Events",
            "coverPhoto",
            {
                "type": Sequelize.STRING,
                "validate": {
                    "isUrl": true
                },
                "allowNull": true
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "Descriptions",
            "title",
            {
                "type": Sequelize.STRING,
                "validate": {
                    "len": [1, 200]
                },
                "allowNull": true
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "Events",
            "date",
            {
                "type": Sequelize.DATE,
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
            "LocationsCities",
            "CityId",
            {
                "type": Sequelize.INTEGER,
                "onUpdate": "CASCADE",
                "onDelete": "cascade",
                "references": {
                    "model": "Cities",
                    "key": "id"
                },
                "primaryKey": true
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "LocationsCities",
            "LocationId",
            {
                "type": Sequelize.INTEGER,
                "onUpdate": "CASCADE",
                "onDelete": "cascade",
                "references": {
                    "model": "Locations",
                    "key": "id"
                },
                "primaryKey": true
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
