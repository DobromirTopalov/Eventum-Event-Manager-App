const {
    expect,
} = require('chai');
const chai = require('chai');
const  chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);


const sinon = require('sinon')
const UserData = require('../app/data/users.data');
const UserController = require('../app/routes/register/register.controller')
let userArray = [];
const userInfoArray = [];
let data = {};
const fakeUserData = {
    users: {
        findById(id) {
            return userArray.find((user) => user.id === id);
        },
        findAllById(id) {
            const thisUser = userArray.find((user)=> user.id === id);
        },
        findByUsername(username) {
            return userArray.find((user) => user.username === username);
        },
        findByEmail(email) {
            return userArray.find((user) => user.email === email);
        },
        getUserInfoById(id) {
            return userArray.find((user) => user.id === id);
        },
        getUserExtraInfoById(id) {
            return userInfoArray.find((user) => user.id === id);
        },
        addNewUser(userObject) {
            userArray.push(userObject);
            userObject.id = userArray.length+1;
            return userObject;
        },
        addUserInfo(userObject) {
            return userObject;
        },
        updateUserInfo(userObject) {
            return userObject;
        },
        updateUserData(userObject) {
            return userObject;
        },
        updateUserDataToInfo(userObject) {
            return userObject;
        },
    },
};

describe('UserController', () => {
    let emailSpy = sinon.stub(fakeUserData.users, 'findByEmail')
    .returns(null);
    let usernameSpy = sinon.stub(fakeUserData.users, 'findByUsername')
    .returns(null);
    let fakes = sinon.collection;

    let Model = null;
    beforeEach(() => {
        Model = {
            findByUsername: (object) => {},
            findByEmail: (object) => {},
            destroy: (object) => {},
        };

         data.users = new UserData(Model);
    });
    afterEach(function() {
        fakes.restore();
        emailSpy.reset();
        usernameSpy.reset();
        
    });
    describe('createUser', () => {
        describe('when only username  is passed', () => {
            it('expect to throw add email message', async () => {
                const testUser = {};
                testUser.username = 'Peter';

                const controller = new UserController(fakeUserData);

                const func = async () => {
                    return await controller.createUser(testUser);
                };

                return await expect(func())
                .to.eventually.be.rejected.and.has.property('message', 'Invalid email length');
                // .and.be.an.instanceOf(UserError.EmptyUsername);
            });
        });
        describe('when only email  is passed', () => {
            it('expect to throw invalid username length', async () => {
                const testUser = {};
                testUser.email = 'peter@gmail.com';

                const controller = new UserController(fakeUserData);

                const func = async () => {
                    return await controller.createUser(testUser);
                };

                return await expect(func())
                .to.eventually.be.rejected.and.has.property('message', 'Invalid username length');
            });
        });
        describe('when only email  is passed', () => {
            it('expect to throw invalid username length', async () => {
                const testUser = {};
                testUser.email = 'peter@gmail.com';
                testUser.username = '';
                const controller = new UserController(fakeUserData);

                const func = async () => {
                    return await controller.createUser(testUser);
                };

                return await expect(func())
                .to.eventually.be.rejected.and.has.property('message', 'Invalid username length');
            });
        });
        describe('when only username is too long', () => {
            it('expect to throw invalid username length', async () => {
                const testUser = {};
                testUser.email = 'peter@gmail.com';
                testUser.username = 'abcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefgabcdefg';
                const controller = new UserController(fakeUserData);

                const func = async () => {
                    return await controller.createUser(testUser);
                };

                return await expect(func())
                .to.eventually.be.rejected.and.has.property('message', 'Invalid username length');
            });
        });
        describe('when only email  is passed', () => {
            it('expect to throw Username includes symbols that are not allowed', async () => {
                const testUser = {};
                testUser.username = 'ee@2231';
                const controller = new UserController(fakeUserData);

                const func = async () => {
                    return await controller.createUser(testUser);
                };

                return await expect(func())
                .to.eventually.be.rejected.and.has.property('message', 'Username includes symbols that are not allowed');
            });
        });
        describe('when only email  is passed', () => {
            it('expect to throw Invalid password length', async () => {
                const testUser = {};
                testUser.username = 'asdadada';
                testUser.email = 'peter@peter.co';
                const controller = new UserController(fakeUserData);

                const func = async () => {
                    return await controller.createUser(testUser);
                };

                return await expect(func())
                .to.eventually.be.rejected.and.has.property('message', 'Invalid password length');
            });
        });
        describe('when only email  is passed', () => {
            it('expect to throw Invalid password length', async () => {
                const testUser = {};
                testUser.username = 'asdadada';
                testUser.email = 'peter@peter.co';
                testUser.password = '';
                const controller = new UserController(fakeUserData);

                const func = async () => {
                    return await controller.createUser(testUser);
                };

                return await expect(func())
                .to.eventually.be.rejected.and.has.property('message', 'The two passwords do not match');
            });
        });
        describe('when no name is passed', () => {
            it('expect to throw Invalid name length', async () => {
                const testUser = {};
                testUser.username = 'asdadada';
                testUser.email = 'peter@peter.co';
                testUser.password = '12345678';
                testUser.passwordRepeat = '12345678';
                const controller = new UserController(fakeUserData);

                const func = async () => {
                    return await controller.createUser(testUser);
                };

                return await expect(func())
                .to.eventually.be.rejected.and.has.property('message', 'Invalid name length');
            });
        });
        describe('when email not valid format', () => {
            it('expect to throw Email is not of valid format', async () => {
                const testUser = {};
                testUser.username = 'asdadada';
                testUser.email = 'peter34';
                testUser.password = '12345678';
                testUser.passwordRepeat = '12345678';
                const controller = new UserController(fakeUserData);

                const func = async () => {
                    return await controller.createUser(testUser);
                };

                return await expect(func())
                .to.eventually.be.rejected.and.has.property('message', 'Email is not of valid format');
            });
        });

        describe('when name not only letters', () => {
            it('expect to throw Name includes symbols that are not allowed', async () => {
                const testUser = {};
                testUser.username = 'asdadada';
                testUser.name = 's#$'
                testUser.email = 'peter@peter.co';
                testUser.password = '12345678';
                testUser.passwordRepeat = '12345678';
                const controller = new UserController(fakeUserData);

                const func = async () => {
                    return await controller.createUser(testUser);
                };

                return await expect(func())
                .to.eventually.be.rejected.and.has.property('message', 'Name includes symbols that are not allowed');
            });
        });


        describe('when username already exists in database', () => {
            it('expect to throw This username is already taken', async () => {
                const testUser = {};
                
                testUser.username = 'userDefault';
                testUser.name = 'lolo'
                testUser.email = 'peter@peter.co';
                testUser.password = '12345678';
                testUser.passwordRepeat = '12345678';

                userArray = [{
                    username: 'userDefault',
                    email: 'user@gmail.com',
                    password: '12345678',
                    name: 'noname',
                    role: 'User',
                    }];

                usernameSpy
                    .returns({
                        dataValues: {
                            id: 1,
                        },
                    });
                emailSpy
                    .returns(null);
                const controller = new UserController(fakeUserData);
                const func = async () => {
                    return await controller.createUser(testUser);
                };

                return await expect(func())
                .to.eventually.be.rejected.and.has.property('message', 'This username is already taken');
            });
        });
        describe('when email already exists in database', () => {
            it('expect to throw This email is already taken', async () => {
                const testUser = {};
                testUser.username = 'newUsername';
                testUser.name = 'lolo'
                testUser.email = 'user@gmail.com';
                testUser.password = '12345678';
                testUser.passwordRepeat = '12345678';
                
                userArray = [{
                    username: 'userDefault',
                    email: 'user@gmail.com',
                    password: '12345678',
                    name: 'noname',
                    role: 'User',
                    }];

                
                emailSpy
                    .returns({
                        dataValues: {
                            id: 1,
                        },
                    });
                usernameSpy
                    .returns(null);    
                const controller = new UserController(fakeUserData);

                const func = async () => {
                    return await controller.createUser(testUser);
                };

                return await expect(func())
                .to.eventually.be.rejected.and.has.property('message', 'This email is already taken');
            });
        });
        describe('when everything is correct', () => {
            it('expect to pass', async () => {
                const testUser = {};
                testUser.username = 'newUsername';
                testUser.name = 'lolo';
                testUser.email = 'nouser@gmail.co';
                testUser.password = '12345678';
                testUser.passwordRepeat = '12345678';

                userArray = [{
                    username: 'userDefault',
                    email: 'user@gmail.com',
                    password: '12345678',
                    name: 'noname',
                    role: 'User',
                    }];
                const controller = new UserController(fakeUserData);

                const func = async () => {
                    return await controller.createUser(testUser);
                };

                return await expect(func())
                .to.eventually.to.be.fulfilled;
                // .and.be.an.instanceOf(UserError.EmptyUsername);
            });
        });

    });
    describe('updateUser', () => {
        describe('when everything is correct', () => {
            it('expect to pass', async () => {
                const testUser = {};
                testUser.username = 'newUsername';
                testUser.name = 'lolo';
                testUser.email = 'nouser@gmail.co';
                testUser.password = '12345678';
                testUser.passwordRepeat = '12345678';

                userArray = [{
                    username: 'userDefault',
                    email: 'user@gmail.com',
                    password: '12345678',
                    name: 'noname',
                    role: 'User',
                    }];
                const controller = new UserController(fakeUserData);

                const func = async () => {
                    return await controller.updateUser(1, testUser);
                };

                return await expect(func())
                .to.eventually.to.be.fulfilled;
                // .and.be.an.instanceOf(UserError.EmptyUsername);
            });
        });
        describe('when two passwords are different ', () => {
            it('expect to pass', async () => {
                const testUser = {};
                testUser.username = 'newUsername';
                testUser.name = 'lolo';
                testUser.email = 'nouser@gmail.co';
                testUser.password = '1d8';
                testUser.passwordRepeat = '12345678';

                userArray = [{
                    username: 'userDefault',
                    email: 'user@gmail.com',
                    password: '12345678',
                    name: 'noname',
                    role: 'User',
                    }];
                const controller = new UserController(fakeUserData);

                const func = async () => {
                    return await controller.updateUser(1, testUser);
                };

                return await expect(func())
                .to.eventually.be.rejected.and.has.property('message', 'The two passwords do not match');
            });
        });
        describe('when the username is changed to different', () => {
            it('expect to pass', async () => {
                const testUser = {};
                testUser.username = 'newUsername';
                testUser.name = 'lolo';
                testUser.email = 'nouser@gmail.co';
                testUser.password = '1d8';
                testUser.passwordRepeat = '1d8';

                userArray = [{
                    id: 2,
                    username: 'userDefault',
                    email: 'user@gmail.com',
                    password: '12345678',
                    name: 'noname',
                    role: 'User',
                    }];
                const controller = new UserController(fakeUserData);

                const func = async () => {
                    return await controller.updateUser(1, testUser);
                };

                return await expect(func())
                .to.eventually.to.be.fulfilled;
                // .and.be.an.instanceOf(UserError.EmptyUsername);
            });
        });
        describe('when the username is changed to different', () => {
            it('expect to throw username taken', async () => {
                const testUser = {};
                testUser.id = 1;
                testUser.username = 'userDefault';
                testUser.name = 'lolo';
                testUser.email = 'nouser@gmail.co';
                testUser.password = '1d8';
                testUser.passwordRepeat = '1d8';

                usernameSpy
                    .returns({
                        dataValues: {
                            id: 2,
                        },
                    });
                emailSpy
                    .returns(null);

                const controller = new UserController(fakeUserData);
                const func = async () => {
                    return await controller.updateUser(1, testUser);
                };

                return await expect(func())
                .to.eventually.be.rejected.and.has.property('message', 'This username is already taken');
            });
        });
        describe('when the username and email is changed to different', () => {
            it('expect to throw email is taken', async () => {
                const testUser = {};
                testUser.id = 1;
                testUser.username = 'userDefault';
                testUser.name = 'lolo';
                testUser.email = 'nouser@gmail.co';
                testUser.password = '1d8';
                testUser.passwordRepeat = '1d8';

                emailSpy
                    .returns({
                        dataValues: {
                            id: 6,
                        },
                    });
                usernameSpy
                    .returns(null);
                const controller = new UserController(fakeUserData);
                const func = async () => {
                    return await controller.updateUser(1, testUser);
                };

                return await expect(func())
                .to.eventually.be.rejected.and.has.property('message', 'This email is already taken');
            });
        });

        describe('when the username and email is changed to different no repeats', () => {
            it('expect to fulfill', async () => {
                const testUser = {};
                testUser.id = 1;
                testUser.username = 'userDefault';
                testUser.name = 'lolo';
                testUser.email = 'nouser@gmail.co';
                testUser.password = '1d8';
                testUser.passwordRepeat = '1d8';

                emailSpy
                    .returns(null);
                usernameSpy
                    .returns(null);

                const controller = new UserController(fakeUserData);
                const func = async () => {
                    return await controller.updateUser(1, testUser);
                };

                return await expect(func())
                .to.eventually.be.fulfilled;
            });
        });
        describe('when the username and email is changed to different no repeats', () => {
            it('expect to fulfill', async () => {
                const testUser = {};
                testUser.id = 1;
                testUser.username = 'userDefault';
                testUser.name = 'lolo';
                testUser.email = 'nouser@gmail.co';
                testUser.password = '1d8';
                testUser.passwordRepeat = '1d8';
                testUser.country = '3213';

                emailSpy
                    .returns(null);
                usernameSpy
                    .returns(null);

                const controller = new UserController(fakeUserData);
                const func = async () => {
                    return await controller.updateUser(1, testUser);
                };

                return await expect(func())
                .to.eventually.be.fulfilled;
            });
        });
    });
    describe('updateCoverPhoto', () => {
        describe('when everything is correct', () => {
            it('expect to pass', async () => {
                const testUser = {};
                testUser.username = 'newUsername';
                testUser.name = 'lolo';
                testUser.email = 'nouser@gmail.co';
                testUser.password = '12345678';
                testUser.passwordRepeat = '12345678';

                userArray = [{
                    username: 'userDefault',
                    email: 'user@gmail.com',
                    password: '12345678',
                    name: 'noname',
                    role: 'User',
                    }];
                const controller = new UserController(fakeUserData);

                const func = async () => {
                    return await controller.updateUser(1, testUser);
                };

                return await expect(func())
                .to.eventually.to.be.fulfilled;
                // .and.be.an.instanceOf(UserError.EmptyUsername);
            });
        });
});

