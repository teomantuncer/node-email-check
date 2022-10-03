const validMX = [
	'contact@gmail.com',
	'contact@yandex.ru',
	'contact@yahoo.com',
	'contact@outlook.com',
	'contact@icloud.com',
]

const invalidMX = [
	'contact@gmail_xxx.com',
	'contact@yandex_xxx.ru',
	'contact@yahoo_xxx.com',
	'contact@outlook_xxx.com',
	'contact@icloud_xxx.com',
]

const blacklistedDomainsEmail = [
	'test@ztuu.com',
	'contact@yyhmail.com',
	'about@youmoos.com',
	'mail@mailsrv.ru',
	'spam@lvjp.com'
]

const invalidEmail = [
	'johndoeexample.com',
	'john@doeexample',
	'john@doe@com',
	'j@d',
	'johndoeexample',
]

module.exports = {
	validMX,
	invalidMX,
	blacklistedDomainsEmail,
	invalidEmail
}
