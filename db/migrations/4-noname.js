'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * addColumn "address" to table "Locations"
 * changeColumn "title" on table "Descriptions"
 * changeColumn "date" on table "Events"
 * changeColumn "name" on table "Locations"
 *
 **/

var info = {
    "revision": 4,
    "name": "noname",
    "created": "2018-03-21T17:14:28.327Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "addColumn",
        params: [
            "Locations",
            "address",
            {
                "type": Sequelize.STRING,
                "validate": {
                    "len": [1, 500]
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
                "content": {
                    "allowNull": true
                },
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
