const { isValidSync } = require('../main.js');
const { validMX, invalidMX, blacklistedDomainsEmail, invalidEmail } = require('./exampleData');

test('5 different valid mx email addresses sync check', () => {
	validMX.forEach(email => {
		expect(isValidSync(email)).toBe(true)
	})
})
test('5 different invalid mx email addresses sync check', () => {
	invalidMX.forEach(email => {
		expect(isValidSync(email)).toBe(false)
	})
})
test('5 different valid email addresses sync check', () => {
	validMX.forEach(email => {
		expect(isValidSync(email)).toBe(true)
	})
})
test('5 different blacklisted domain email addresses sync check', () => {
	blacklistedDomainsEmail.forEach(email => {
		expect(isValidSync(email)).toBe(false)
	})
})
test('5 different invalid email addresses sync check', () => {
	invalidEmail.forEach(email => {
		expect(isValidSync(email)).toBe(false)
	})
})
