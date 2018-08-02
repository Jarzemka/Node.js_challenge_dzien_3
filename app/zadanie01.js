const crypto = require('crypto');

const MY_PWD_HASH = '5dca0fc4e306d92b2077ad85e7c4bd87a3e8648e';

const passwords = [
	'??TegoHasła',
	'CodersLab',
	'Node.js Szyfruje Pliki',
	'Zaźółć Gęślą Jaźń',
	'Moje Haslo 1@3!',
	'111#$((@)n',
	'Dzisiaj Szyfruje 83'
];
const hashFuncs = ['sha256', 'sha512', 'rmd160', 'md5'];

passwords.forEach(password => {
	hashFuncs.forEach(hashFunc => {
    const hash = crypto.createHmac(hashFunc, password).digest('hex');
    if (hash == MY_PWD_HASH) {
      console.log(password, hashFunc, hash);
    }
	});
});



