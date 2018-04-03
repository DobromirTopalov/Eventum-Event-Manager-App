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
            return eventArray.find((user) => user.id === id);
        },
    },
};
describe('UserController', () => {
    // const emailSpy = sinon.stub(fakeUserData.users, 'findByEmail')
    // .returns(null);
    // const usernameSpy = sinon.stub(fakeUserData.users, 'findByUsername')
    // .returns(null);
    // const profilePicSpy = sinon.stub(fakeUserData.users, 'updateUserProfilePic')
    // .returns(null);
    // const coverPicSpy = sinon.stub(fakeUserData.users, 'updateUserCoverPic')
    // .returns(null);
    // const fakes = sinon.collection;
    // let Model = null;
    // beforeEach(() => {
    //     Model = {
    //         findByUsername: (object) => {},
    //         findByEmail: (object) => {},
    //         destroy: (object) => {},
    //     };

    //      data.users = new UserData(Model);
    // });
    // afterEach(function() {
    //     fakes.restore();
    //     emailSpy.reset();
    //     usernameSpy.reset();
    //     profilePicSpy.reset();
    // });
    describe('createEvent', () => {
        describe('when only username  is passed', () => {
            it('expect to throw add email message', async () => {
                const testUser = {};
                testUser.username = 'Peter';

                const controller = new UserController(fakeUserData);

                const func = async () => {
                    return await controller.createUser(testUser);
                };

                return await expect(func())
                .to.eventually.be.rejected
                .and.has.property('message', 'Invalid email length');
                // .and.be.an.instanceOf(UserError.EmptyUsername);
            });
        });
    });
});