const bcrypt = require('bcrypt');

const imageName = (name) => {

    let encryptedName = new Promise((resolve, reject) => {
        bcrypt.hash(name + Date.now(), 10, function(err, hash) {
          if (err) reject(err)
          resolve(hash.replace(/\W+/g, ""))
        });
      })
    
    return encryptedName;
};

// async function getty() {
//     let stuff = await imageName('r');
//     console.log(stuff)
//     return stuff
// }
// getty();
  module.exports = {
    imageName
  };
  
