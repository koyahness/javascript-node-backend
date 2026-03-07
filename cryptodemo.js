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
//randombytes
crypto.randomBytes(16, (err, buff) => {
    if (err) throw err;
    console.log(buff.toString('hex'));
})
//can use to generated userids for exampl


//encrypting and decrypting data
//done by creating cypher text using cryptographic algorithms and somekey
//encrypt plain text (readable data) into cypher text (unreadable data)
//cypher text can only be decrypted by someone with the correct key
//uses iv that makes sure the result is different each time even with same text

//createCipheriv and createDecipheriv
//we need three things, the algorithm, the IV, a key and iv
const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

 const cipher = crypto.createCipheriv(algorithm, key, iv); //gives cipher text
 let encrypted = cipher.update('Hello, this is a secret message', 'utf8', 'hex');
 encrypted +=  cipher.final('hex');
 console.log(encrypted);



