const Data = require('./main.data');

const {
    Event,
    UserInfo,
} = require('../../models/database/models');

class EventData extends Data {
    constructor() {
        super(Event);
    }
    findById(id) {
        return this.Model.findOne({
            where: {
                id: id,
            },
        })
        .then((item) =>  {
            return item.dataValues;
        })
    }
   
    getEventInfoById(id) {
        return  this.Model.findOne({
            where: {
                id: id,
            },
        })
        .then((item) => item.dataValues)
    }
   
    
    async addNewEvent(eventObject) {
        try {
            console.log( eventObject.getDate())
            let seqError;
            await this.Model
            .build({ title: eventObject.getTitle(), 
                 describe: eventObject.getDescription(),
                 capacity: eventObject.getCapacity(),
                 date: eventObject.getDate()
                })
            .save()
            .catch(err => {
                    seqError = err; //sequelize error handling issue with save
                  });
            
            if(seqError && seqError.name === 'SequelizeValidationError') {
                throw new Error('We are experiencing creating this event. Try again later or contact our teams!')
            }
        } catch (err) {
            throw err;
        }
    }
   
}

module.exports = EventData;
