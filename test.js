const emailCheck = require('./main.js');
(async () => {
	console.log('xxx@xx.com', await emailCheck.isValid('xxx@xx.com').catch(err => console.log(err.message)))
	console.log('xxx@xxx.dev', await emailCheck.isValid('xxx@xxx.dev').catch(err => console.log(err.message)))
	console.log('xxx@xxx.com', await emailCheck.isValid('xxx@xxx.com').catch(err => console.log(err.message)))
	console.log('xxx@gmail.com', await emailCheck.isValid('xxx@gmail.com').catch(err => console.log(err.message)));
	console.log('xxx@zran5yxefwrcpqtcq.gq', await emailCheck.isValid('xxx@zran5yxefwrcpqtcq.gq').catch(err => console.log(err.message)))
	console.log('xxx@gmailxxasdfasfzgzzggz.com', await emailCheck.isValid('xxx@gmailxxasdfasfzgzzggz.com').catch(err => console.log(err.message)))
	console.log('xxx@gmail.comdsgsdggdsgdssdg', await emailCheck.isValid('xxx@gmail.comdsgsdggdsgdssdg').catch(err => console.log(err.message)))
})()
