const bcrypt = require('bcrypt');
const imageName = (name) => {
    const encryptedName = new Promise((resolve, reject) => {
        bcrypt.hash(name + Date.now(), 10, function(err, hash) {
            if (err) reject(err);
            resolve(hash.replace(/\W+/g, ''));
        });
    });
    return encryptedName;
};
  module.exports = {
    imageName,
  };
