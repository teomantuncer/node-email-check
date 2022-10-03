# node-email-check

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0) [![npm package](https://img.shields.io/npm/v/node-email-check.svg)](https://www.npmjs.org/package/node-email-check) [![downloads](https://img.shields.io/npm/dt/node-email-check.svg)](https://www.npmjs.com/package/node-email-check) [![size](https://img.shields.io/bundlephobia/minzip/node-email-check)](https://www.npmjs.com/package/node-email-check)  [![last-commit](https://img.shields.io/github/last-commit/teomantuncer/node-email-check)](https://github.com/teomantuncer/node-email-check) 

NodeJS Email Validator, Checker and MX Checker

You can check email address with mx check, syntax check and domain check.

## Installation

```bash
npm install node-email-check

# or

yarn add node-email-check
```

## Usage
```javascript
const emailCheck = require('node-email-check');

// async request with mx check
await emailCheck.isValid('example@email.com');

// sync request without mx check
emailCheck.isValidSync('example@email.com');
```

## Testing

```bash
npm run test
```

## Contributing

1. Fork it
2. Create your feature branch: `git checkout -b my-feature-or-fix`
3. Commit your changes: `git commit -am 'Add some feature or fix'`
4. Push to the branch: `git push origin my-feature-or-fix`
5. Submit a pull request

## Contributors

Teoman Tuncer - Author ([@teomantuncer](https://twitter.com/teomantuncer)) - [tuncer.dev](https://tuncer.dev)

## License

GPL3.0
