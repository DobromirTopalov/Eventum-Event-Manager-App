'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * removeColumn "coverPhoto" from table "Events"
 * createTable "Tickets", deps: []
 * createTable "Artists", deps: []
 * createTable "EventComments", deps: []
 * createTable "TypeTickets", deps: []
 * createTable "Users", deps: []
 * createTable "Comments", deps: [Users]
 * createTable "TicketTypeTickets", deps: [Tickets, TypeTickets]
 * createTable "TicketUsers", deps: [Users, Tickets]
 * createTable "EventArtists", deps: [Events, Artists]
 * createTable "UserFollowingArtists", deps: [Users, Artists]
 * changeColumn "date" on table "Events"
 *
 **/

var info = {
    "revision": 8,
    "name": "noname",
    "created": "2018-03-22T10:06:50.177Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "removeColumn",
        params: ["Events", "coverPhoto"]
    },
    {
        fn: "createTable",
        params: [
            "Tickets",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "autoIncrement": true,
                    "primaryKey": true,
                    "allowNull": false
                },
                "price": {
                    "type": Sequelize.FLOAT,
                    "validate": {
                        "isFloat": true
                    },
                    "allowNull": true
                },
                "capacity": {
                    "type": Sequelize.INTEGER,
                    "validate": {
                        "isInt": true
                    },
                    "allowNull": true
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "Artists",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "autoIncrement": true,
                    "primaryKey": true,
                    "allowNull": false
                },
                "username": {
                    "type": Sequelize.STRING,
                    "validate": {
                        "len": [1, 30]
                    },
                    "unique": true,
                    "allowNull": false
                },
                "email": {
                    "type": Sequelize.STRING,
                    "validate": {
                        "isEmail": true
                    },
                    "unique": true,
                    "allowNull": false
                },
                "password": {
                    "type": Sequelize.STRING,
                    "validate": {
                        "len": [6, 30]
                    },
                    "allowNull": false
                },
                "name": {
                    "type": Sequelize.STRING,
                    "validate": {
                        "isAlpha": true
                    },
                    "allowNull": true
                },
                "city": {
                    "type": Sequelize.STRING,
                    "validate": {
                        "len": [1, 100]
                    },
                    "allowNull": true
                },
                "job_possition": {
                    "type": Sequelize.STRING,
                    "validate": {
                        "len": [1, 100]
                    },
                    "allowNull": true
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "EventComments",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "autoIncrement": true,
                    "primaryKey": true,
                    "allowNull": false
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "TypeTickets",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "autoIncrement": true,
                    "primaryKey": true,
                    "allowNull": false
                },
                "type": {
                    "type": Sequelize.STRING,
                    "validate": {
                        "len": [1, 100]
                    },
                    "allowNull": true
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "Users",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "autoIncrement": true,
                    "primaryKey": true,
                    "allowNull": false
                },
                "username": {
                    "type": Sequelize.STRING,
                    "validate": {
                        "len": [1, 30]
                    },
                    "unique": true,
                    "allowNull": false
                },
                "email": {
                    "type": Sequelize.STRING,
                    "validate": {
                        "isEmail": true
                    },
                    "unique": true,
                    "allowNull": false
                },
                "password": {
                    "type": Sequelize.STRING,
                    "validate": {
                        "len": [6, 30]
                    },
                    "allowNull": false
                },
                "name": {
                    "type": Sequelize.STRING,
                    "validate": {
                        "isAlpha": true
                    },
                    "allowNull": true
                },
                "city": {
                    "type": Sequelize.STRING,
                    "validate": {
                        "len": [1, 100]
                    },
                    "allowNull": true
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "Comments",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "autoIncrement": true,
                    "primaryKey": true,
                    "allowNull": false
                },
                "content": {
                    "type": Sequelize.TEXT,
                    "allowNull": true
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                },
                "UserId": {
                    "type": Sequelize.INTEGER,
                    "onUpdate": "CASCADE",
                    "onDelete": "SET NULL",
                    "references": {
                        "model": "Users",
                        "key": "id"
                    },
                    "allowNull": true
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "TicketTypeTickets",
            {
                "createdAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                },
                "TicketId": {
                    "type": Sequelize.INTEGER,
                    "onUpdate": "CASCADE",
                    "onDelete": "CASCADE",
                    "references": {
                        "model": "Tickets",
                        "key": "id"
                    },
                    "primaryKey": true
                },
                "TypeTicketId": {
                    "type": Sequelize.INTEGER,
                    "onUpdate": "CASCADE",
                    "onDelete": "CASCADE",
                    "references": {
                        "model": "TypeTickets",
                        "key": "id"
                    },
                    "primaryKey": true
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "TicketUsers",
            {
                "amount": {
                    "type": Sequelize.INTEGER,
                    "allowNull": true
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                },
                "UserId": {
                    "type": Sequelize.INTEGER,
                    "onUpdate": "CASCADE",
                    "onDelete": "CASCADE",
                    "references": {
                        "model": "Users",
                        "key": "id"
                    },
                    "primaryKey": true
                },
                "TicketId": {
                    "type": Sequelize.INTEGER,
                    "onUpdate": "CASCADE",
                    "onDelete": "CASCADE",
                    "references": {
                        "model": "Tickets",
                        "key": "id"
                    },
                    "primaryKey": true
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "EventArtists",
            {
                "createdAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                },
                "EventId": {
                    "type": Sequelize.INTEGER,
                    "onUpdate": "CASCADE",
                    "onDelete": "CASCADE",
                    "references": {
                        "model": "Events",
                        "key": "id"
                    },
                    "primaryKey": true
                },
                "ArtistId": {
                    "type": Sequelize.INTEGER,
                    "onUpdate": "CASCADE",
                    "onDelete": "CASCADE",
                    "references": {
                        "model": "Artists",
                        "key": "id"
                    },
                    "primaryKey": true
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "UserFollowingArtists",
            {
                "createdAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "allowNull": false
                },
                "UserId": {
                    "type": Sequelize.INTEGER,
                    "onUpdate": "CASCADE",
                    "onDelete": "CASCADE",
                    "references": {
                        "model": "Users",
                        "key": "id"
                    },
                    "primaryKey": true
                },
                "ArtistId": {
                    "type": Sequelize.INTEGER,
                    "onUpdate": "CASCADE",
                    "onDelete": "CASCADE",
                    "references": {
                        "model": "Artists",
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
