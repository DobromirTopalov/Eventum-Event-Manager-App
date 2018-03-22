'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * changeColumn "title" on table "Descriptions"
 * changeColumn "date" on table "Events"
 *
 **/

var info = {
    "revision": 6,
    "name": "noname",
    "created": "2018-03-21T17:16:42.589Z",
    "comment": ""
};

var migrationCommands = [{
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
