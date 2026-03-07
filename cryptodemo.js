//provides cryptographic functionality
//create hashes like hash passwords
//create random hexadecimal strings
//encrypt and dcrypt data

import crypto from 'crypto'

// create hash with createhash method
const hash = crypto.hash('sha256'); //take in the algorithm you want to use
hash.update('password1234') //to hash something use the update method
 console.log(hash.digeest) // to get the hash


