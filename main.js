'use strict';

const range = require('node-range');
const dns = require('dns');
const blacklist = require('./database.js');

const validateRegex = /^(?!(?:(?:\x22?\x5C[\x00-\x7E]\x22?)|(?:\x22?[^\x5C\x22]\x22?)){255,})(?!(?:(?:\x22?\x5C[\x00-\x7E]\x22?)|(?:\x22?[^\x5C\x22]\x22?)){65,}@)(?:(?:[\x21\x23-\x27\x2A\x2B\x2D\x2F-\x39\x3D\x3F\x5E-\x7E]+)|(?:\x22(?:[\x01-\x08\x0B\x0C\x0E-\x1F\x21\x23-\x5B\x5D-\x7F]|(?:\x5C[\x00-\x7F]))*\x22))(?:\.(?:(?:[\x21\x23-\x27\x2A\x2B\x2D\x2F-\x39\x3D\x3F\x5E-\x7E]+)|(?:\x22(?:[\x01-\x08\x0B\x0C\x0E-\x1F\x21\x23-\x5B\x5D-\x7F]|(?:\x5C[\x00-\x7F]))*\x22)))*@(?:(?:(?!.*[^.]{64,})(?:(?:(?:xn--)?[a-z0-9]+(?:-[a-z0-9]+)*\.){1,126}){1,}(?:(?:[a-z][a-z0-9]*)|(?:(?:xn--)[a-z0-9]+))(?:-[a-z0-9]+)*)|(?:\[(?:(?:IPv6:(?:(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){7})|(?:(?!(?:.*[a-f0-9][:\]]){7,})(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,5})?::(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,5})?)))|(?:(?:IPv6:(?:(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){5}:)|(?:(?!(?:.*[a-f0-9]:){5,})(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,3})?::(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,3}:)?)))?(?:(?:25[0-5])|(?:2[0-4][0-9])|(?:1[0-9]{2})|(?:[1-9]?[0-9]))(?:\.(?:(?:25[0-5])|(?:2[0-4][0-9])|(?:1[0-9]{2})|(?:[1-9]?[0-9]))){3}))\]))$/;

function allDomainSuffixes(email) {
	const domainComponents = email.split('@')[1].split('.');
	return range(0, domainComponents.length).map(function (n) {
		return domainComponents.slice(n).join('.');
	});
}

function isBlacklisted(email) {
	function suffixIsBlacklisted(domainSuffix) {
		return blacklist.indexOf(domainSuffix) >= 0;
	}
	return allDomainSuffixes(email).some(suffixIsBlacklisted);
}

function validateEmail (email) {
	if (typeof email === 'string' && email.length > 5 && email.length < 61 && validateRegex.test(email)) {
		return email.toLowerCase();
	} else {
		return false;
	}
}

async function resolveMX (domain) {
	const addresses = await new Promise((resolve, reject) => {
		dns.resolveMx(domain, (err, add) => {
			if (err) { return reject(err) }
			resolve(add)
		});
	})
	if (addresses.length === 1) {
		return addresses[0].exchange;
	} else {
		let lowestPriorityIndex = 0;
		let lowestPriority = addresses[0].priority;
		for (let i = 1; i < addresses.length; i++) {
			const currentPriority = addresses[i].priority;
			if (currentPriority < lowestPriority) {
				lowestPriority = currentPriority;
				lowestPriorityIndex = i;
			}
		}
		return addresses[lowestPriorityIndex].exchange;
	}
}

function isolateDomain (email) {
	return new Promise(function (resolve, reject) {
		email = validateEmail(email);
		email ? resolve(email.split('@')[1]) : reject();
	})
}

async function validateMx (mail) {
	const email = await isolateDomain(mail)
	const address = await resolveMX(email).catch(() => {
		return false
	});
	return !!address
}

module.exports = {
	isValidSync: function (email) {
		if (typeof(email) !== 'string') {
			return false;
		}
		email = email.toLowerCase();
		if (!validateRegex.test(email)) {
			return false;
		}
		return !isBlacklisted(email);
	},
	isValid: async function (email){
		if (typeof(email) !== 'string') {
			return false;
		}
		email = email.toLowerCase();
		if (!validateRegex.test(email)) {
			return false;
		}
		if (isBlacklisted(email)) {
			return false;
		}
		return validateMx(email);
	}
};
