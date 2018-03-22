'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * removeColumn "id" from table "EventComments"
 * addColumn "CommentId" to table "EventComments"
 * addColumn "EventId" to table "EventComments"
 * changeColumn "date" on table "Events"
 *
 **/

var info = {
    "revision": 9,
    "name": "noname",
    "created": "2018-03-22T10:33:17.457Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "removeColumn",
        params: ["EventComments", "id"]
    },
    {
        fn: "addColumn",
        params: [
            "EventComments",
            "CommentId",
            {
                "type": Sequelize.INTEGER,
                "onUpdate": "CASCADE",
                "onDelete": "CASCADE",
                "references": {
                    "model": "Comments",
                    "key": "id"
                },
                "primaryKey": true
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "EventComments",
            "EventId",
            {
                "type": Sequelize.INTEGER,
                "onUpdate": "CASCADE",
                "onDelete": "CASCADE",
                "references": {
                    "model": "Events",
                    "key": "id"
                },
                "primaryKey": true
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
