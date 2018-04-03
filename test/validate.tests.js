const {
    expect,
} = require('chai');
const chai = require('chai');
const  chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

const checkPassword = require('../models/data-class/validate');

describe('checkPasword', () => {
    describe('when two passowrds are equal', () => {
        it('expect to throw add email message', () => {
            const pass1 = 'pass!@#';
            const pass2 = 'pass!@#';
            const func = (pass1, pass2) => {
                return checkPassword(pass1, pass2);
            };
            return expect(func())
           .to.equal(true)
            // .and.be.an.instanceOf(UserError.EmptyUsername);
        });
    });
    describe('when two passowrds are different', () => {
        it('expect to returh false', () => {
            const pass1 = 'pass!@#2';
            const pass2 = 'pass!@#';
            const func = function (pass1, pass2)  {
                return checkPassword(pass1, pass2);
            };
            return expect(func(pass1, pass2))
           .to.equal(false)
            // .and.be.an.instanceOf(UserError.EmptyUsername);
        });
    });
});