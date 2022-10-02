# node-email-check

### usage
```javascript
const emailCheck = require('node-email-check');

// async request with mx check
await emailCheck.isValid('example@email.com');

// sync request without mx check
emailCheck.isValidSync('example@email.com');
```
