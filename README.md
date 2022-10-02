# node-email-check

NodeJS Email Validator, Checker and MX Checker

You can check email address with mx check, syntax check and domain check.

## Installation

```bash
npm install node-email-check

# or

yarn add node-email-check
```

### usage
```javascript
const emailCheck = require('node-email-check');

// async request with mx check
await emailCheck.isValid('example@email.com');

// sync request without mx check
emailCheck.isValidSync('example@email.com');
```
