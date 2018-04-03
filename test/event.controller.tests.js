const {
    expect,
} = require('chai');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const sinon = require('sinon');
const EventData = require('../app/data/event.data');
const EventController = require('../app/routes/event/event.controller');
let eventArray = [];
const data = {};
const fakeEventData = {
    events: {
        findById(id) {
            return eventArray.find((event) => event.id === id);
        },
        addEventCoverPic(id, photo) {
            return null;
        },
    },
    country: {
        getAll() {
            return null;
        },
    },
    categories: {
        getAllCategories() {
            return null;
        },
    },
};
let testEvent = {};
describe('EventController', () => {
    let getCategorySpy = sinon.stub(fakeEventData.categories, 'getAllCategories');
    let getCountrySpy = sinon.stub(fakeEventData.country, 'getAll');
    let getPhotoSpy = sinon.stub(fakeEventData.events, 'addEventCoverPic');
        
    
    // const usernameSpy = sinon.stub(fakeUserData.users, 'findByUsername')
    // .returns(null);
    // const profilePicSpy = sinon.stub(fakeUserData.users, 'updateUserProfilePic')
    // .returns(null);
    // const coverPicSpy = sinon.stub(fakeUserData.users, 'updateUserCoverPic')
    // .returns(null);
    // const fakes = sinon.collection;
    // let Model = null;
    beforeEach(() => {
        
        let Model = {
            findByUsername: (object) => {},
            findByEmail: (object) => {},
            destroy: (object) => {},
        };

        data.events = new EventData(Model);
        testEvent = {
            title: '',
            date: '',
            time: '',
            country: '',
            city: '',
            placeName: '',
            address: '',
            description: '',
            category: '',
            subcategory: '',
            capacity: '',
            price: '',

        };
    });
    afterEach(function() {
        getCategorySpy.reset();
        getCountrySpy.reset();
        getPhotoSpy.reset();
        testEvent = {};
       
    });
    describe('createEvent', () => {
        describe('when only title is passed', () => {
            it('expect to throw add add date in req format message', async () => {
                testEvent.date = '';
                testEvent.title = 'myevent';

                const controller = new EventController(fakeEventData);

                const func = async () => {
                    return await controller.createEvent(1, testEvent);
                };

                return await expect(func())
                .to.eventually.be.rejected
                .and.has.property('message', 'Please add a date in the required format');
                // .and.be.an.instanceOf(UserError.EmptyUsername);
            });
        });
    });

    describe('when only date and title  is passed', () => {
        it('expect to throw add email message', async () => {
            
            testEvent.date = '11/12/2018';
            testEvent.title = 'myevent';

            const controller = new EventController(fakeEventData);

            const func = async () => {
                return await controller.createEvent(1, testEvent);
            };

            return await expect(func())
            .to.eventually.be.rejected
            .and.has.property('message', 'Please add time in the required format');
            // .and.be.an.instanceOf(UserError.EmptyUsername);
        });
    });
    describe('getCountry', () => {
        describe('no countries are in the database', () => {
            it('expect to return empty', async () => {

                const controller = new EventController(fakeEventData);
                getCountrySpy.returns(null);
                const func = async () => {
                    return await controller.getCountries();
                };

                return await expect(func())
                .to.eventually.be.fulfilled;
            });
        });
    });

    describe('getcategories', () => {
        describe('no ca are in the database', () => {
            it('expect to return empty', async () => {


                getCategorySpy.returns(null);
                const controller = new EventController(fakeEventData);

                const func = async () => {
                    return await controller.getCategories();
                };

                return await expect(func())
                .to.eventually.be.fulfilled;

            });
        });
    });
    describe('getcategories', () => {
        describe('no ca are in the database', () => {
            it('expect to return empty', async () => {


                getCategorySpy
                .returns(1);
                const controller = new EventController(fakeEventData);

                const func = async () => {
                    return await controller.getCategories();
                };

                return await expect(func())
                .to.eventually.be.fulfilled.equals(1);

            });
        });
    });
    // describe('add cover photo ', () => {
    //     describe('no ca are in the database', () => {
    //         it('expect to return empty', async () => {

    //             getPhotoSpy
    //             .returns(null);
    //             const controller = new EventController(fakeEventData);

    //             const func = async () => {
    //                 return await controller.addEventCoverPic(1, 'photo.jpg');
    //             };

    //             return await expect(func())
    //             .to.eventually.be.fulfilled.equals(1);

    //         });
    //     });
    // });
    
});