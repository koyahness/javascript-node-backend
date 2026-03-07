//provides cryptographic functionality
//create hashes like hash passwords
//create random hexadecimal strings
//encrypt and dcrypt data

import crypto from 'crypto'

crypto.cre
// create hash with createhash method
const hash = crypto.createHash('sha256'); //take in the algorithm you want to use
  
hash.update('password1234') //to hash something use the update method

//to never store plain text passwords in databases, so hash it

 console.log(hash.digest('hex')) // to get the hash... set output to be in hex

//to generate cryptographically strong hexadecimalsring

crypto.randomBytes(16, (err, buff) => {
    if (err) throw err;
    console.log(buff.toString('hex'));
})
//can use to generated userids for exampl




