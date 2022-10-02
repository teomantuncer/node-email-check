const emailCheck = require('./main.js');

console.log('xxx@xx.com', emailCheck.isValidSync('xxx@xx.com'))
console.log('xxx@xxx.dev', emailCheck.isValidSync('xxx@xxx.dev'))
console.log('xxx@xxx.com', emailCheck.isValidSync('xxx@xxx.com'))
console.log('xxx@gmail.com', emailCheck.isValidSync('xxx@gmail.com'))
console.log('xxx@zran5yxefwrcpqtcq.gq', emailCheck.isValidSync('xxx@zran5yxefwrcpqtcq.gq')) // temp mail
console.log('xxx@gmailxxasdfasfzgzzggz.com', emailCheck.isValidSync('xxx@gmailxxasdfasfzgzzggz.com'))
console.log('xxx@gmail.comdsgsdggdsgdssdg', emailCheck.isValidSync('xxx@gmail.comdsgsdggdsgdssdg'));

(async () => {
	console.log('xxx@xx.com', await emailCheck.isValid('xxx@xx.com').catch(err => console.log(err.message)))
	console.log('xxx@xxx.dev', await emailCheck.isValid('xxx@xxx.dev').catch(err => console.log(err.message)))
	console.log('xxx@xxx.com', await emailCheck.isValid('xxx@xxx.com').catch(err => console.log(err.message)))
	console.log('xxx@gmail.com', await emailCheck.isValid('xxx@gmail.com').catch(err => console.log(err.message)));
	console.log('xxx@zran5yxefwrcpqtcq.gq', await emailCheck.isValid('xxx@zran5yxefwrcpqtcq.gq').catch(err => console.log(err.message)))
	console.log('xxx@gmailxxasdfasfzgzzggz.com', await emailCheck.isValid('xxx@gmailxxasdfasfzgzzggz.com').catch(err => console.log(err.message)))
	console.log('xxx@gmail.comdsgsdggdsgdssdg', await emailCheck.isValid('xxx@gmail.comdsgsdggdsgdssdg').catch(err => console.log(err.message)))
})()
