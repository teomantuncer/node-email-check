const { isValid } = require('../main.js');
const { validMX, invalidMX, blacklistedDomainsEmail, invalidEmail } = require('./exampleData');

test('5 different valid mx email addresses async check', () => {
	validMX.forEach(async email => {
		expect(await isValid(email)).toBe(true)
	})
})
test('5 different invalid mx email addresses async check', () => {
	invalidMX.forEach(async email => {
		expect(await isValid(email)).toBe(false)
	})
})
test('5 different valid email addresses async check', () => {
	validMX.forEach(async email => {
		expect(await isValid(email)).toBe(true)
	})
})
test('5 different blacklisted domain email addresses async check', () => {
	blacklistedDomainsEmail.forEach(async email => {
		expect(await isValid(email)).toBe(false)
	})
})
test('5 different invalid email addresses async check', () => {
	invalidEmail.forEach(async email => {
		expect(await isValid(email)).toBe(false)
	})
})
